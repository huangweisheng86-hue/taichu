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

// ============ 在线人数 + 修为同步 ============
const onlineRef = db.ref("online/" + playerId);
const playersRef = db.ref("players/" + playerId);

function syncPlayer() {
    if (typeof player === "undefined" || !player) return;
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    let realmName = "凡人";
    let stageName = "前期一层";
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
    if (header) header.textContent = `✨ 太初烬寰 ✨ [在线 ${count}]`;
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
            if (boss.hp === 0) {
                boss.killedBy = playerName;
            }
            return boss;
        }, () => {
            bossRef.once("value", snap => resolve(snap.val()));
        });
    });
}

function listenBoss(callback) {
    bossRef.on("value", snap => callback(snap.val()));
}
