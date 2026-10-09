// ============ Firebase 配置 ============
const firebaseConfig = {
  apiKey: "AIzaSyDlsNLJSPGYxMGNtrBTF4IkDLissokbGmc",
  authDomain: "taichu-f0f43.firebaseapp.com",
  databaseURL: "https://taichu-f0f43-default-rtdb.firebaseio.com",
  projectId: "taichu-f0f43",
  storageBucket: "taichu-f0f43.firebasestorage.app",
  messagingSenderId: "720041621993",
  appId: "1:720041621993:web:f8b38bed5c4448e8ed7378"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============ 玩家身份 ============
let playerId = localStorage.getItem("xiuxian_player_id");
if (!playerId) {
    playerId = "P" + Date.now() + Math.floor(Math.random() * 1000);
    localStorage.setItem("xiuxian_player_id", playerId);
}
let playerName = localStorage.getItem("xiuxian_player_name") || ("修士" + Math.floor(Math.random() * 10000));
localStorage.setItem("xiuxian_player_name", playerName);

// ============ 聊天 ============
const chatRef = db.ref("chat");

chatRef.limitToLast(50).on("child_added", snapshot => {
    const msg = snapshot.val();
    if (!msg) return;
    if (msg.to && msg.to !== playerName && msg.name !== playerName) return;
    const time = new Date(msg.time).toLocaleTimeString("zh-CN", {hour: "2-digit", minute: "2-digit"});
    const prefix = msg.isSys ? "" : `[${time}] `;
    const tag = msg.to ? `【私聊】` : "";
    const text = `${prefix}${tag}${msg.name}：${msg.text}`;
    if (typeof chatLog === "function") {
        chatLog(text, msg.isSys ? "sys" : (msg.name === playerName ? "me" : "broadcast"));
    }
});

function sendChat(text, to) {
    if (!text || !text.trim()) return;
    chatRef.push({
        name: playerName,
        text: text.trim(),
        to: to || null,
        time: Date.now()
    });
}

function broadcastSys(text) {
    chatRef.push({
        name: "【天道】",
        text: text,
        time: Date.now(),
        isSys: true
    });
}

// ============ 在线 + 同步 ============
const onlineRef = db.ref("online/" + playerId);
const playersRef = db.ref("players/" + playerId);

function syncPlayer() {
    if (typeof player === "undefined" || !player) return;
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    let realmName = "凡人", stageName = "前期一层";
    try {
        if (typeof calcRealmStage === "function" && typeof REALMS !== "undefined") {
            const rs = calcRealmStage(absQ);
            realmName = (q >= 0 ? REALMS : EVIL_REALMS)[rs.realmIndex] || "未知";
            stageName = STAGES[rs.stageIndex] || "";
        }
    } catch (e) {}
    playersRef.set({
        name: playerName,
        power: player.power,
        realm: realmName,
        stage: stageName,
        sect: player.sect || null,
        master: player.master || null,
        disciple: player.disciple || null,
        partner: player.partner || null,
        title: player.title || null,
        time: Date.now()
    });
}

onlineRef.set({name: playerName, time: firebase.database.ServerValue.TIMESTAMP});
onlineRef.onDisconnect().remove();
playersRef.onDisconnect().remove();

setInterval(syncPlayer, 5000);

db.ref("online").on("value", snapshot => {
    const data = snapshot.val() || {};
    const count = Object.keys(data).length;
    const names = Object.values(data).map(d => d.name).join("、");
    const header = document.querySelector("header h1");
    if (header) header.textContent = `✨ 太初烬寰 6.0 ✨ [在线 ${count}]`;
    if (typeof chatLog === "function" && window._lastOnlineCount !== count) {
        window._lastOnlineCount = count;
        chatLog(`👥 当前在线（${count}）：${names || "无"}`, "sys");
    }
});

// ============ 改名 ============
function changeName(newName) {
    if (!newName || newName.length > 12) {
        if (typeof chatLog === "function") chatLog("❌ 名字长度需在 1-12 字之间", "sys");
        return;
    }
    playerName = newName;
    localStorage.setItem("xiuxian_player_name", newName);
    onlineRef.update({name: newName});
    playersRef.update({name: newName});
    if (typeof chatLog === "function") chatLog(`✅ 改名为「${newName}」`, "sys");
}

// ============ 封神榜 ============
function fetchRanking() {
    return new Promise(resolve => {
        db.ref("players").once("value", snap => {
            const data = snap.val() || {};
            const list = Object.values(data);
            list.sort((a, b) => Math.abs(b.power) - Math.abs(a.power));
            resolve(list);
        });
    });
}

// ============ 世界BOSS ============
const bossRef = db.ref("boss");

function ensureBoss(callback) {
    bossRef.once("value", snap => {
        let boss = snap.val();
        if (!boss || boss.hp <= 0 || Date.now() - boss.time > 1000 * 60 * 60) {
            boss = {
                name: "上古魔王·烛九阴",
                hp: 10000000,
                maxHp: 10000000,
                time: Date.now(),
                damage: {}
            };
            bossRef.set(boss);
        }
        callback(boss);
    });
}

function attackBoss(damage) {
    return new Promise(resolve => {
        bossRef.transaction(boss => {
            if (!boss || boss.hp <= 0) return boss;
            boss.hp = Math.max(0, boss.hp - damage);
            boss.damage = boss.damage || {};
            boss.damage[playerName] = (boss.damage[playerName] || 0) + damage;
            if (boss.hp === 0) boss.killedBy = playerName;
            return boss;
        }, () => {
            bossRef.once("value", snap => resolve(snap.val()));
        });
    });
}

function listenBoss(callback) {
    bossRef.on("value", snap => callback(snap.val()));
}

// ============ 门派 ============
const SECTS = {
    "青云宗":     {type: "正道", cultivateBonus: 0.2, desc: "正道第一大宗，修炼+20%"},
    "天剑门":     {type: "正道", cultivateBonus: 0.3, desc: "剑修圣地，修炼+30%"},
    "丹霞谷":     {type: "正道", cultivateBonus: 0.25, desc: "丹道宗师，炼丹成功率+15%"},
    "合欢宗":     {type: "正道", cultivateBonus: 0.15, desc: "双修加成，道侣修行更快"},
    "血魔殿":     {type: "魔道", cultivateBonus: 0.4, desc: "魔道大派，修炼+40%但心境-"},
    "万鬼窟":     {type: "魔道", cultivateBonus: 0.35, desc: "御鬼之术，打怪掉灵石+30%"}
};

// ============ 每日任务 ============
const DAILY_TASKS = [
    {id: "cultivate_10", name: "修炼10次", target: 10, reward: {stone: 500, herb: 5}},
    {id: "fight_5", name: "打怪5次", target: 5, reward: {stone: 1000, herb: 10}},
    {id: "breakthrough_1", name: "突破1次大境界", target: 1, reward: {stone: 5000, herb: 20}},
    {id: "boss_hit_3", name: "攻击BOSS 3次", target: 3, reward: {stone: 2000, herb: 15}},
    {id: "chat_5", name: "聊天5次", target: 5, reward: {stone: 300, herb: 3}}
];

// ============ 灵脉争夺 ============
const LEYLINE_INTERVAL = 1000 * 60 * 60; // 每小时刷新
const leylinesRef = db.ref("leylines");

function ensureLeylines(cb) {
    leylinesRef.once("value", snap => {
        let data = snap.val() || {};
        const now = Date.now();
        for (const key in data) {
            if (now - data[key].time > LEYLINE_INTERVAL) delete data[key];
        }
        if (Object.keys(data).length === 0) {
            const names = ["东胜灵脉", "西牛灵脉", "南瞻灵脉", "北俱灵脉"];
            names.forEach(n => {
                data[n] = {
                    time: now,
                    owner: null,
                    power: 100000 + Math.floor(Math.random() * 1000000)
                };
            });
        }
        leylinesRef.set(data);
        cb(data);
    });
}

function claimLeyline(name) {
    return new Promise(resolve => {
        leylinesRef.transaction(data => {
            if (!data || !data[name]) return data;
            if (data[name].owner === playerName) return data; // 已经是你的
            data[name].owner = playerName;
            data[name].time = Date.now();
            return data;
        }, () => {
            leylinesRef.once("value", snap => resolve(snap.val()));
        });
    });
}

// ============ 交易行 ============
const marketRef = db.ref("market");

function listItem(itemName, price, count) {
    return marketRef.push({
        seller: playerName,
        itemName: itemName,
        price: price,
        count: count,
        time: Date.now()
    });
}

function fetchMarket() {
    return new Promise(resolve => {
        marketRef.once("value", snap => {
            const data = snap.val() || {};
            const list = Object.entries(data).map(([k, v]) => ({key: k, ...v}));
            list.sort((a, b) => b.time - a.time);
            resolve(list);
        });
    });
}

function buyMarketItem(key) {
    return new Promise(resolve => {
        marketRef.child(key).once("value", snap => {
            const item = snap.val();
            if (!item) { resolve(null); return; }
            if (item.seller === playerName) {
                resolve({error: "不能买自己挂的物品"});
                return;
            }
            marketRef.child(key).remove();
            resolve(item);
        });
    });
}

// ============ 抽奖 ============
const LOTTERY_POOL = [
    {name: "初级修为丹", weight: 40},
    {name: "中级修为丹", weight: 25},
    {name: "高级修为丹", weight: 15},
    {name: "初级突破丹", weight: 10},
    {name: "中级突破丹", weight: 5},
    {name: "洗髓丹", weight: 3},
    {name: "高级突破丹", weight: 2}
];
