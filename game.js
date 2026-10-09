// ============ 6.0 数据定义 ============
const REALMS = ["凡人","淬体","换血","通脉","开源","筑基","结丹","元婴","化神","练虚","合体","大乘","入圣","圣尊","真圣","圣王","圣皇","仙骨","真仙","天仙","玄仙","金仙","太乙金仙","大罗金仙","仙君","仙尊","仙帝","仙祖","准帝","大帝","天帝","永恒大帝","神帝-超越永恒","太初神","太初古神","太初仙道","太初大道","道尊","天道","鸿蒙道主","混沌道主","万界道主","诸天主宰","诸天道仙","封神","真神","神王","太初之主","位面之主"];
const EVIL_REALMS = ["魔胎","魔体","魔血","魔脉","魔源","地魔","天魔","魔宗","魔魂","魔虚","魔王","半步魔圣","魔圣","魔尊","真仙魔神","仙王魔神","魔皇","魔仙骨","魔仙","天仙魔神","玄仙魔神","金仙魔神","太乙魔仙","大罗魔仙","魔君","魔真神","魔帝","魔祖","准魔帝","大魔帝","天魔帝","永恒魔帝","魔帝-超越永恒","太初魔神","太初古魔","太初魔道","太初大道","道魔","万界魔主","混沌魔主","诸天魔主","灭世魔尊","灭世魔仙","封魔","真魔","魔神王","太初之魔","位面魔主"];
const STAGES = ["前期一层","前期二层","前期三层","前期四层","前期五层","前期六层","前期七层","前期八层","前期九层","前期十层","中期一层","中期二层","中期三层","中期四层","中期五层","中期六层","中期七层","中期八层","中期九层","中期十层","后期一层","后期二层","后期三层","后期四层","后期五层","后期六层","后期七层","后期八层","后期九层","后期十层","巅峰一层","巅峰二层","巅峰三层","巅峰四层","巅峰五层","巅峰六层","巅峰七层","巅峰八层","巅峰九层","巅峰十层","圆满一层","圆满二层","圆满三层","圆满四层","圆满五层","圆满六层","圆满七层","圆满八层","圆满九层","圆满十层"];
const ROOTS = ["无灵根","伪灵根","普通灵根","先天灵根","纯灵根","地灵根","天灵根","玄天灵根","圣灵根","仙纯灵根","仙神灵根","神-虚无灵根","神-无量灵根","神-星神灵根","神-混沌灵根","神-鸿蒙灵根","神-永恒灵根"];
const ROOT_MULT = [1,1,2,3,4,5,6,8,10,13,16,20,25,30,40,50,70];
const ELEMENTS = ["金","木","水","火","土","风","雷","阴阳","剑"];
const ELEMENT_WEIGHTS = [1,1,1,1,1,0.3,0.3,0.1,0.1];

const PHYSIQUES = [
    {name:"凡体", cultivateBonus:0, pillBonus:0, rarity:1},
    {name:"灵体", cultivateBonus:20, pillBonus:150, rarity:1},
    {name:"玄灵体", cultivateBonus:30, pillBonus:180, rarity:1},
    {name:"玉骨体", cultivateBonus:40, pillBonus:200, rarity:1},
    {name:"青木灵体", cultivateBonus:35, pillBonus:220, rarity:1},
    {name:"圣体-神", cultivateBonus:50, pillBonus:300, rarity:2},
    {name:"圣体-魔", cultivateBonus:35, pillBonus:300, rarity:2},
    {name:"阴阳道体", cultivateBonus:65, pillBonus:500, rarity:2},
    {name:"道源之体", cultivateBonus:75, pillBonus:600, rarity:2},
    {name:"星辰体", cultivateBonus:70, pillBonus:550, rarity:2},
    {name:"雷灵体", cultivateBonus:80, pillBonus:500, rarity:2},
    {name:"火灵圣体", cultivateBonus:78, pillBonus:520, rarity:2},
    {name:"万劫不灭体", cultivateBonus:65, pillBonus:650, rarity:3},
    {name:"帝源之体", cultivateBonus:85, pillBonus:750, rarity:3},
    {name:"圣人之体", cultivateBonus:95, pillBonus:850, rarity:3},
    {name:"战天神体", cultivateBonus:100, pillBonus:900, rarity:3},
    {name:"不灭战体", cultivateBonus:110, pillBonus:950, rarity:3},
    {name:"虚空体", cultivateBonus:50, pillBonus:1000, rarity:3},
    {name:"永恒神体", cultivateBonus:100, pillBonus:1000, rarity:4},
    {name:"太初道体", cultivateBonus:200, pillBonus:1150, rarity:5},
    {name:"太初魔体", cultivateBonus:210, pillBonus:1150, rarity:5},
    {name:"混沌体", cultivateBonus:250, pillBonus:1300, rarity:5},
    {name:"鸿蒙圣体", cultivateBonus:270, pillBonus:1400, rarity:5},
    {name:"虚无神体", cultivateBonus:180, pillBonus:1500, rarity:5},
    {name:"鸿蒙主宰体", cultivateBonus:350, pillBonus:1700, rarity:6},
    {name:"混沌归源体", cultivateBonus:360, pillBonus:1750, rarity:6},
    {name:"万道归一体", cultivateBonus:370, pillBonus:1800, rarity:6},
    {name:"天道裂变体", cultivateBonus:380, pillBonus:1850, rarity:6},
    {name:"虚无终焉体", cultivateBonus:400, pillBonus:1900, rarity:6},
    {name:"诸天湮灭体", cultivateBonus:420, pillBonus:2000, rarity:6}
];

// 地图区域
const MAPS = [
    {name: "新手村", minRealm: 0, monsters: ["野兔","灰狼"], desc: "凡人出生地"},
    {name: "幽暗森林", minRealm: 1, monsters: ["山猪","毒蛇"], desc: "妖兽聚集"},
    {name: "烈焰山脉", minRealm: 3, monsters: ["黑熊","妖狐","火麟兽"], desc: "火系灵脉"},
    {name: "九幽深渊", minRealm: 6, monsters: ["雷鹰","蛟龙","千年树妖"], desc: "魔气浓郁"},
    {name: "太古遗迹", minRealm: 10, monsters: ["上古凶兽","太古魔龙"], desc: "上古战场"}
];

const MONSTERS = [
    {name:"野兔",   reqPower: 0,    stone:[5, 15],   herb: 0, map: "新手村"},
    {name:"灰狼",   reqPower: 50,   stone:[15, 40],  herb: 1, map: "新手村"},
    {name:"山猪",   reqPower: 150,  stone:[30, 80],  herb: 1, map: "幽暗森林"},
    {name:"毒蛇",   reqPower: 400,  stone:[80, 200], herb: 2, map: "幽暗森林"},
    {name:"黑熊",   reqPower: 1000, stone:[200, 500], herb: 2, map: "烈焰山脉"},
    {name:"妖狐",   reqPower: 3000, stone:[500, 1200], herb: 3, map: "烈焰山脉"},
    {name:"火麟兽", reqPower: 8000, stone:[1200, 3000], herb: 4, map: "烈焰山脉"},
    {name:"雷鹰",   reqPower: 20000, stone:[3000, 8000], herb: 5, map: "九幽深渊"},
    {name:"蛟龙",   reqPower: 60000, stone:[8000, 20000], herb: 6, map: "九幽深渊"},
    {name:"千年树妖", reqPower: 200000, stone:[20000, 60000], herb: 8, map: "九幽深渊"},
    {name:"上古凶兽", reqPower: 800000, stone:[60000, 150000], herb: 10, map: "太古遗迹"},
    {name:"太古魔龙", reqPower: 3000000, stone:[150000, 500000], herb: 15, map: "太古遗迹"}
];

const PILLS = {
    "初级修为丹":   {price: 100,     effect: {power: 100},       desc: "+100 修为"},
    "中级修为丹":   {price: 1000,    effect: {power: 1000},      desc: "+1000 修为"},
    "高级修为丹":   {price: 10000,   effect: {power: 10000},     desc: "+10000 修为"},
    "极品修为丹":   {price: 100000,  effect: {power: 100000},    desc: "+10万 修为"},
    "仙品修为丹":   {price: 1000000, effect: {power: 1000000},   desc: "+100万 修为"},
    "洗髓丹":       {price: 50000,   effect: {refineRoot: true}, desc: "随机改变灵根"},
    "天地元素丹":   {price: 80000,   effect: {refineElements: true}, desc: "重铸元素"},
    "初级突破丹":   {price: 500,     effect: {breakthroughPill: true}, desc: "突破到 淬体~开源 用"},
    "中级突破丹":   {price: 5000,    effect: {breakthroughPill: true}, desc: "突破到 筑基~化神 用"},
    "高级突破丹":   {price: 50000,   effect: {breakthroughPill: true}, desc: "突破到 练虚~圣皇 用"},
    "顶级突破丹":   {price: 500000,  effect: {breakthroughPill: true}, desc: "突破到 仙骨~仙尊 用"},
    "仙级突破丹":   {price: 5000000, effect: {breakthroughPill: true}, desc: "突破到 仙帝~大帝 用"},
    "神级突破丹":   {price: 50000000, effect: {breakthroughPill: true}, desc: "突破到 天帝~太初之主 用"}
};

function getBreakthroughPill(realmIndex) {
    if (realmIndex <= 4) return "初级突破丹";
    if (realmIndex <= 8) return "中级突破丹";
    if (realmIndex <= 16) return "高级突破丹";
    if (realmIndex <= 24) return "顶级突破丹";
    if (realmIndex <= 27) return "仙级突破丹";
    if (realmIndex <= 30) return "神级突破丹";
    return "神级突破丹";
}

const ALCHEMY = {
    "初级修为丹": {herb: 3,  success: 0.9},
    "中级修为丹": {herb: 8,  success: 0.8},
    "高级修为丹": {herb: 20, success: 0.7},
    "极品修为丹": {herb: 50, success: 0.6},
    "仙品修为丹": {herb: 120, success: 0.5},
    "洗髓丹":     {herb: 30, success: 0.4},
    "天地元素丹": {herb: 50, success: 0.4},
    "初级突破丹": {herb: 10, success: 0.85},
    "中级突破丹": {herb: 40, success: 0.7},
    "高级突破丹": {herb: 100, success: 0.6},
    "顶级突破丹": {herb: 250, success: 0.5},
    "仙级突破丹": {herb: 600, success: 0.4},
    "神级突破丹": {herb: 1500, success: 0.3}
};

const ACHIEVEMENTS = [
    {id: "first_cultivate", name: "初入修行", desc: "第一次打坐修炼"},
    {id: "first_fight",     name: "初战告捷", desc: "第一次击败怪物"},
    {id: "first_break",     name: "破茧成蝶", desc: "第一次突破大境界"},
    {id: "realm_5",         name: "金丹大道", desc: "达到 结丹期"},
    {id: "realm_10",        name: "元婴化神", desc: "达到 练虚期"},
    {id: "realm_20",        name: "天仙之资", desc: "达到 天仙"},
    {id: "stone_10000",     name: "富甲一方", desc: "灵石累计超过 1 万"},
    {id: "stone_1000000",   name: "富可敌国", desc: "灵石累计超过 100 万"},
    {id: "herb_100",        name: "灵草大师", desc: "灵草累计超过 100"},
    {id: "boss_hit",        name: "屠魔勇士", desc: "对世界BOSS造成伤害"},
    {id: "signin_7",        name: "七日苦修", desc: "累计签到 7 天"},
    {id: "sect_join",       name: "宗门弟子", desc: "加入任意门派"},
    {id: "partner",         name: "比翼双修", desc: "与玩家结为道侣"},
    {id: "master",          name: "传道授业", desc: "收一名徒弟"},
    {id: "leyline_owner",   name: "灵脉之主", desc: "占领一条灵脉"}
];

const TITLES = [
    {id: "newbie",   name: "初入江湖", cond: p => p.realmIndex >= 0},
    {id: "fighter",  name: "百战之士", cond: p => p.totalFights >= 10},
    {id: "rich",     name: "富家翁",   cond: p => p.stone >= 100000},
    {id: "master",   name: "一代宗师", cond: p => p.disciple},
    {id: "partner",  name: "神仙眷侣", cond: p => p.partner},
    {id: "boss_slay",name: "屠魔者",   cond: p => p.bossKills >= 1},
    {id: "immortal", name: "长生真人", cond: p => p.realmIndex >= 15}
];

// ============ 段 2 ============
// （继续在同一个文件里往下粘贴）let player = null;
function defaultPlayer() {
    const r = Math.random();
    let root;
    if (r < 0.1) root = 0;
    else if (r < 0.4) root = 1;
    else if (r < 0.7) root = 2;
    else if (r < 0.9) root = 3;
    else if (r < 0.98) root = 4;
    else root = 16;

    const lawElements = {};
    for (const e of ELEMENTS) lawElements[e] = {exp: 0, level: 0};

    return {
        power: 0, realmIndex: 0, stageIndex: 0,
        mana: 100, maxMana: 100,
        stone: 0, herb: 0,
        lawPower: 50,
        root: root,
        elements: generateRandomElements(),
        physique: generateRandomPhysique(),
        lawElements: lawElements,
        items: {},
        age: 16, life: 80,
        lastCultivate: 0,
        lastSignin: 0,
        signinCount: 0,
        lastOnlineReward: Date.now(),
        achievements: {},
        bossDamageToday: 0,
        // 6.0 新字段
        sect: null,
        master: null,
        disciple: null,
        partner: null,
        title: "newbie",
        totalFights: 0,
        bossKills: 0,
        // 每日任务
        dailyDate: "",
        dailyProgress: {},
        dailyDone: false
    };
}

function needForStage(r, s) { return 10 + r * 3000 + s * 50; }

function calcRealmStage(q) {
    let r = q >= 0 ? q : -q;
    const realmList = q >= 0 ? REALMS : EVIL_REALMS;
    for (let i = 0; i < realmList.length; i++) {
        for (let s = 0; s < STAGES.length; s++) {
            const n = needForStage(i, s);
            if (r < n) return {realmIndex: i, stageIndex: s, needForNext: n - r};
            r -= n;
        }
    }
    return {realmIndex: realmList.length - 1, stageIndex: STAGES.length - 1, needForNext: 0};
}

function getTotalNeeded(r, s) {
    let t = 0;
    for (let i = 0; i < r; i++)
        for (let j = 0; j < STAGES.length; j++)
            t += needForStage(i, j);
    for (let j = 0; j < s; j++)
        t += needForStage(r, j);
    return t;
}

function getPhysiqueData(name) { return PHYSIQUES.find(p => p.name === name); }

function generateRandomElements() {
    const count = Math.floor(Math.random() * 5) + 1;
    const result = [];
    const available = ELEMENTS.map((e, i) => ({name: e, weight: ELEMENT_WEIGHTS[i]}));
    for (let i = 0; i < count && result.length < 5; i++) {
        const total = available.reduce((s, a) => s + a.weight, 0);
        let rand = Math.random() * total;
        let acc = 0;
        for (let j = 0; j < available.length; j++) {
            acc += available[j].weight;
            if (rand <= acc) {
                if (!result.includes(available[j].name)) result.push(available[j].name);
                break;
            }
        }
    }
    return result;
}

function generateRandomPhysique() {
    let totalWeight = 0;
    for (const p of PHYSIQUES) {
        if (p.rarity === 1) totalWeight += 70;
        else if (p.rarity === 2) totalWeight += 25;
        else if (p.rarity === 3) totalWeight += 4;
        else totalWeight += 1;
    }
    let rand = Math.random() * totalWeight;
    let acc = 0;
    for (const p of PHYSIQUES) {
        const w = p.rarity === 1 ? 70 : p.rarity === 2 ? 25 : p.rarity === 3 ? 4 : 1;
        acc += w;
        if (rand <= acc) return p.name;
    }
    return "凡体";
}

const SAVE_KEY = "taichu_xiuxian_save_v6";

function saveGame(silent) {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(player));
        if (!silent) log("💾 存档成功！", "lime");
    } catch (e) {
        if (!silent) log("❌ 存档失败：" + e.message, "red");
    }
}

function loadGame() {
    try {
        const data = localStorage.getItem(SAVE_KEY);
        if (!data) return null;
        const p = JSON.parse(data);
        if (!p.lawElements) p.lawElements = {};
        for (const e of ELEMENTS) {
            if (!p.lawElements[e]) p.lawElements[e] = {exp: 0, level: 0};
        }
        if (!p.items) p.items = {};
        if (p.sect === undefined) p.sect = null;
        if (p.master === undefined) p.master = null;
        if (p.disciple === undefined) p.disciple = null;
        if (p.partner === undefined) p.partner = null;
        if (p.title === undefined) p.title = "newbie";
        if (p.totalFights === undefined) p.totalFights = 0;
        if (p.bossKills === undefined) p.bossKills = 0;
        if (!p.dailyProgress) p.dailyProgress = {};
        if (p.dailyDate === undefined) p.dailyDate = "";
        if (p.dailyDone === undefined) p.dailyDone = false;
        return p;
    } catch (e) { return null; }
}

function log(text, color = "gray") {
    const logEl = document.getElementById("log");
    const line = document.createElement("div");
    line.className = "line " + color;
    line.textContent = text;
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
    while (logEl.children.length > 100) logEl.removeChild(logEl.firstChild);
}

function chatLog(text, cls = "sys") {
    const el = document.getElementById("chat-log");
    if (!el) return;
    const line = document.createElement("div");
    line.className = "line " + cls;
    line.textContent = text;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
    while (el.children.length > 80) el.removeChild(el.firstChild);
}

function unlockAchievement(id) {
    if (!player.achievements[id]) {
        player.achievements[id] = Date.now();
        const ach = ACHIEVEMENTS.find(a => a.id === id);
        if (ach) {
            log(`🏆 成就解锁：【${ach.name}】- ${ach.desc}`, "gold");
            if (typeof broadcastSys === "function") broadcastSys(`${playerName} 解锁成就【${ach.name}】！`);
        }
    }
}

function refreshUI() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    const realmList = q >= 0 ? REALMS : EVIL_REALMS;
    const rs = calcRealmStage(absQ);

    player.realmIndex = rs.realmIndex;
    player.stageIndex = rs.stageIndex;

    document.getElementById("realm-name").textContent = realmList[rs.realmIndex] || "未知";
    document.getElementById("realm-stage").textContent = STAGES[rs.stageIndex] || "";
    document.getElementById("stat-power").textContent = q.toLocaleString();
    document.getElementById("stat-stone").textContent = player.stone.toLocaleString();
    document.getElementById("stat-mana").textContent = `${player.mana}/${player.maxMana}`;
    document.getElementById("stat-law").textContent = player.lawPower;
    document.getElementById("stat-root").textContent = ROOTS[player.root];
    document.getElementById("stat-physique").textContent = player.physique;
    document.getElementById("stat-elements").textContent = player.elements.join("·") || "无";
    document.getElementById("stat-herb").textContent = player.herb;

    const percent = Math.min(100, (absQ / (absQ + rs.needForNext)) * 100);
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = `距离下一阶段还需 ${rs.needForNext.toLocaleString()} 修为`;

    // 称号
    const titleEl = document.getElementById("title-display");
    if (titleEl) {
        const t = TITLES.find(t => t.id === player.title);
        titleEl.textContent = t ? `【${t.name}】` : "";
    }
    // 门派
    const sectEl = document.getElementById("sect-display");
    if (sectEl) {
        sectEl.textContent = player.sect ? `🏛️ ${player.sect}` : "（未加入门派）";
    }

    updateCooldownButton();
}

const CULTIVATE_CD = 3000;

function updateCooldownButton() {
    if (!player) return;
    const now = Date.now();
    const remain = Math.max(0, CULTIVATE_CD - (now - player.lastCultivate));
    const btns = document.querySelectorAll('[data-action="cultivate"], [data-action="cultivate-mo"]');
    btns.forEach(btn => {
        if (remain > 0) {
            btn.disabled = true;
            btn.textContent = `⏳ 冷却 ${(remain / 1000).toFixed(1)}s`;
        } else {
            btn.disabled = false;
            btn.textContent = btn.dataset.action === "cultivate" ? "☯ 打坐修炼" : "🌑 魔道修炼";
        }
    });
}

setInterval(updateCooldownButton, 200);

// ============ 段 3 ============
// （继续往下粘贴）function cultivate(isMo) {
    const now = Date.now();
    if (now - player.lastCultivate < CULTIVATE_CD) {
        log(`⏳ 修炼冷却中`, "orange");
        return;
    }
    player.lastCultivate = now;

    let mult = ROOT_MULT[player.root];
    // 门派加成
    if (player.sect && typeof SECTS !== "undefined" && SECTS[player.sect]) {
        mult = mult * (1 + SECTS[player.sect].cultivateBonus);
    }
    // 道侣加成
    if (player.partner) mult = mult * 1.3;

    const physiqueData = getPhysiqueData(player.physique);
    const physiqueBonus = physiqueData ? physiqueData.cultivateBonus : 0;
    const rawGain = Math.floor(Math.random() * 5) + 1;
    const rootBonus = Math.floor(rawGain * (mult - 1));
    const cultivateGain = rawGain + rootBonus + physiqueBonus;

    if (isMo) {
        player.power -= cultivateGain;
        log(`🌑 魔道修炼：修为 -${cultivateGain}`, "purple");
    } else {
        player.power += cultivateGain;
        log(`☯ 打坐修炼：修为 +${cultivateGain}（灵根×${mult.toFixed(2)}）`, "lime");
        if (Math.random() < 0.6 / ROOT_MULT[player.root]) {
            const moGain = Math.floor(Math.random() * 2 * ROOT_MULT[player.root]) + 1;
            player.power -= moGain;
            log(`😈 受到 ${moGain} 魔气侵蚀！`, "red");
        }
    }

    player.mana = Math.min(player.maxMana, player.mana + 5);
    unlockAchievement("first_cultivate");
    progressDaily("cultivate_10");
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

function fight() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;

    // 找最强的能打的怪
    let strongest = null;
    for (const m of MONSTERS) {
        if (absQ >= m.reqPower) strongest = m;
        else break;
    }

    if (!strongest) {
        log(`⚠️ 你修为太低，连野兔都打不过！`, "orange");
        return;
    }

    let monster = strongest;
    if (Math.random() < 0.05) {
        const nextIdx = MONSTERS.indexOf(strongest) + 1;
        if (nextIdx < MONSTERS.length && absQ < MONSTERS[nextIdx].reqPower) {
            monster = MONSTERS[nextIdx];
            log(`⚡ 意外遭遇更强怪物：${monster.name}！`, "orange");
        }
    }

    player.totalFights++;
    const winChance = absQ / Math.max(1, monster.reqPower);
    if (winChance >= 1) {
        let stone = Math.floor(Math.random() * (monster.stone[1] - monster.stone[0] + 1)) + monster.stone[0];
        // 门派加成
        if (player.sect === "万鬼窟") stone = Math.floor(stone * 1.3);
        const herbGain = monster.herb > 0 ? Math.floor(Math.random() * (monster.herb + 1)) : 0;
        player.stone += stone;
        player.herb += herbGain;
        const powerGain = Math.floor(monster.reqPower * 0.05);
        player.power += q >= 0 ? powerGain : -powerGain;
        log(`⚔️ 击败【${monster.name}】！灵石 +${stone}，灵草 +${herbGain}，修为 +${powerGain}`, "lime");
        unlockAchievement("first_fight");
        if (player.stone >= 10000) unlockAchievement("stone_10000");
        if (player.stone >= 1000000) unlockAchievement("stone_1000000");
        if (player.herb >= 100) unlockAchievement("herb_100");
        progressDaily("fight_5");
        if (typeof broadcastSys === "function" && Math.random() < 0.1) {
            broadcastSys(`${playerName} 击败了【${monster.name}】！`);
        }
    } else {
        const lose = Math.floor(monster.reqPower * 0.1);
        player.power -= q >= 0 ? lose : -lose;
        player.mana = Math.max(0, player.mana - 30);
        log(`💀 挑战【${monster.name}】失败！修为 -${lose}`, "red");
    }

    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

function adventure() {
    const roll = Math.random();
    if (roll < 0.15) {
        player.mana = Math.max(0, player.mana - 20);
        log(`🗡 遇到妖兽袭击，灵力 -20！`, "red");
    } else if (roll < 0.35) {
        log(`🍃 游历一番，一无所获。`, "gray");
    } else if (roll < 0.7) {
        const gain = Math.floor(Math.random() * 100) + 20;
        player.power += gain;
        log(`💎 发现灵矿，修为 +${gain}。`, "cyan");
    } else if (roll < 0.9) {
        const gain = Math.floor(Math.random() * 300) + 100;
        const herb = Math.floor(Math.random() * 3) + 1;
        player.power += gain;
        player.herb += herb;
        log(`🌟 误入灵脉，修为 +${gain}，灵草 +${herb}！`, "gold");
    } else {
        const herb = Math.floor(Math.random() * 8) + 3;
        player.power += 1000;
        player.stone += 500;
        player.herb += herb;
        player.lawPower += 10;
        player.mana = player.maxMana;
        log(`⭐ 天降奇缘！修为 +1000，灵石 +500，灵草 +${herb}，法则 +10！`, "gold");
    }
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

let lastRealmKey = "";

function checkBreakthrough() {
    let safety = 0;
    while (safety++ < 500) {
        const q = player.power;
        const absQ = q >= 0 ? q : -q;
        const rs = calcRealmStage(absQ);
        if (rs.needForNext > 0) break;
        const isLastStage = rs.stageIndex === STAGES.length - 1;
        if (!isLastStage) {
            const gain = needForStage(rs.realmIndex, rs.stageIndex);
            player.power += q >= 0 ? gain : -gain;
            const newRS = calcRealmStage(Math.abs(player.power));
            log(`💠 自动突破小境界，进入【${STAGES[newRS.stageIndex]}】。`, "cyan");
            continue;
        } else {
            log(`⛔ 修为已满，需点击「大境界突破」按钮。`, "orange");
            break;
        }
    }

    const q2 = player.power;
    const absQ2 = q2 >= 0 ? q2 : -q2;
    const realmList2 = q2 >= 0 ? REALMS : EVIL_REALMS;
    const rs2 = calcRealmStage(absQ2);
    const sign = q2 >= 0 ? "good" : "evil";
    const key = `${sign}-${rs2.realmIndex}-${rs2.stageIndex}`;

    if (key !== lastRealmKey) {
        const oldKey = lastRealmKey;
        lastRealmKey = key;
        if (oldKey) {
            const [oldSign, oldR] = oldKey.split("-");
            const oldRi = parseInt(oldR);
            if (sign !== oldSign) {
                if (sign === "good") {
                    log(`✨ 你顿悟正道！`, "gold");
                    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 顿悟正道！`);
                } else {
                    log(`🌑 你堕入魔道！`, "purple");
                    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 堕入魔道！`);
                }
            } else if (rs2.realmIndex > oldRi) {
                log(`🔥🔥🔥 突破大境界！进入【${realmList2[rs2.realmIndex]}】！`, "gold");
                unlockAchievement("first_break");
                if (rs2.realmIndex >= 6) unlockAchievement("realm_5");
                if (rs2.realmIndex >= 10) unlockAchievement("realm_10");
                if (rs2.realmIndex >= 20) unlockAchievement("realm_20");
                progressDaily("breakthrough_1");
                if (typeof broadcastSys === "function") broadcastSys(`${playerName} 突破大境界，进入【${realmList2[rs2.realmIndex]}】！`);
                showFlash();
            }
        }
        player.realmIndex = rs2.realmIndex;
        player.stageIndex = rs2.stageIndex;
        player.maxMana = 100 + rs2.realmIndex * 20;
        player.mana = player.maxMana;
    }
}

function showFlash() {
    const flash = document.createElement("div");
    flash.className = "breakthrough-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1000);
}

function breakthrough() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    const realmList = q >= 0 ? REALMS : EVIL_REALMS;
    const rsNow = calcRealmStage(absQ);
    const rsPlus = calcRealmStage(absQ + 1);

    if (rsPlus.realmIndex === rsNow.realmIndex) {
        log("❌ 小境界会自动突破。", "orange");
        return;
    }
    if (rsNow.stageIndex !== STAGES.length - 1 || rsNow.needForNext > 0) {
        log("❌ 修为未满或未到大境界门口。", "orange");
        return;
    }
    if (rsNow.realmIndex + 1 >= realmList.length) {
        log("❌ 已至巅峰。", "red");
        return;
    }
    const pillName = getBreakthroughPill(rsNow.realmIndex + 1);
    if (!player.items[pillName] || player.items[pillName] <= 0) {
        log(`❌ 需要【${pillName}】！`, "red");
        return;
    }
    player.items[pillName]--;
    if (player.items[pillName] <= 0) delete player.items[pillName];
    log(`✨ 消耗【${pillName}】！`, "gold");
    const gain = rsNow.needForNext;
    player.power += q >= 0 ? gain : -gain;
    log(`⚡ 突破大境界！`, "orange");
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

function useLawPower() {
    if (player.lawPower < 1) { log("❌ 法则能量不足！", "red"); return; }
    player.lawPower -= 1;
    const elements = player.elements;
    if (elements.length === 0) { log("❌ 没有元素！", "red"); return; }
    const e = elements[Math.floor(Math.random() * elements.length)];
    const data = player.lawElements[e] || {exp: 0, level: 0};
    data.exp += 1;
    const nextExp = Math.pow(10, data.level + 1);
    if (data.level < 5 && data.exp >= nextExp) {
        data.exp -= nextExp;
        data.level++;
        log(`✨ ${e}之法则突破至【${getElementLevelName(data.level)}】！`, "gold");
        if (typeof broadcastSys === "function") broadcastSys(`${playerName} 的 ${e}之法则突破！`);
    }
    player.lawElements[e] = data;
    log(`🔮 消耗 1 法则能量。`, "cyan");
    refreshUI();
    saveGame(true);
}

function getElementLevelName(level) {
    return ["一窍不通","初窥门径","小有所成","登堂入室","炉火纯青","登峰造极"][level] || "未知";
}

// ============ 段 4 ============
// （继续粘贴）function shop() {
    const items = Object.entries(PILLS);
    log("🏪 坊市（使用灵石购买）：", "gold");
    log(`💰 灵石：${player.stone.toLocaleString()}`, "cyan");
    items.forEach(([name, info], idx) => {
        const owned = player.items[name] || 0;
        log(`  [${idx+1}] ${name} - ${info.price.toLocaleString()} 灵石（${info.desc}）持有 ${owned}`, "gray");
    });
    log("💡 输入「买 丹药名」/「用 丹药名」", "orange");
}

function buyPill(name) {
    const pill = PILLS[name];
    if (!pill) { log(`❌ 没有这种丹药：${name}`, "red"); return; }
    if (player.stone < pill.price) {
        log(`❌ 灵石不足，需要 ${pill.price.toLocaleString()}`, "red");
        return;
    }
    player.stone -= pill.price;
    player.items[name] = (player.items[name] || 0) + 1;
    log(`🛒 购买【${name}】，剩余灵石 ${player.stone.toLocaleString()}。`, "lime");
    refreshUI();
    saveGame(true);
}

function usePill(name) {
    if (!player.items[name] || player.items[name] <= 0) {
        log(`❌ 你没有【${name}】`, "red");
        return;
    }
    const pill = PILLS[name];
    if (!pill) { log(`❌ 未知丹药`, "red"); return; }
    player.items[name]--;
    if (player.items[name] <= 0) delete player.items[name];

    if (pill.effect.power) {
        player.power += pill.effect.power;
        log(`✨ 服用【${name}】，修为 +${pill.effect.power.toLocaleString()}！`, "gold");
    }
    if (pill.effect.refineRoot) {
        const old = player.root;
        const rand = Math.random();
        let newRoot;
        if (rand < 0.3) newRoot = old;
        else if (rand < 0.5) newRoot = Math.max(0, old - 1);
        else newRoot = Math.min(ROOTS.length - 1, old + 1);
        if (newRoot === old) log(`🍃 灵根未变`, "orange");
        else {
            player.root = newRoot;
            log(`✨ 洗髓成功！灵根由 ${ROOTS[old]} → ${ROOTS[newRoot]}！`, "gold");
            if (typeof broadcastSys === "function") broadcastSys(`${playerName} 洗髓成功！`);
        }
    }
    if (pill.effect.refineElements) {
        const oldStr = player.elements.join("·");
        player.elements = generateRandomElements();
        const newLawElements = {};
        for (const e of ELEMENTS) newLawElements[e] = {exp: 0, level: 0};
        player.lawElements = newLawElements;
        log(`✨ 天地元素丹生效！`, "purple");
    }
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

function alchemy() {
    log("⚗️ 炼丹炉（消耗灵草）：", "gold");
    log(`🌿 灵草：${player.herb}`, "lime");
    const entries = Object.entries(ALCHEMY);
    entries.forEach(([name, info], idx) => {
        const owned = player.items[name] || 0;
        log(`  [${idx+1}] ${name} - 灵草 ${info.herb}（成功率 ${(info.success*100).toFixed(0)}%）持有 ${owned}`, "gray");
    });
    log("💡 输入「炼 丹药名」", "orange");
}

function craftPill(name) {
    const recipe = ALCHEMY[name];
    if (!recipe) { log(`❌ 没有这种丹方`, "red"); return; }
    if (player.herb < recipe.herb) {
        log(`❌ 灵草不足，需要 ${recipe.herb}`, "red");
        return;
    }
    player.herb -= recipe.herb;
    let success = recipe.success;
    // 丹霞谷加成
    if (player.sect === "丹霞谷") success += 0.15;
    if (Math.random() < success) {
        player.items[name] = (player.items[name] || 0) + 1;
        log(`✨ 炼丹成功！获得【${name}】`, "gold");
        if (typeof broadcastSys === "function" && Math.random() < 0.3) {
            broadcastSys(`${playerName} 炼出了【${name}】！`);
        }
    } else {
        log(`💥 炼丹失败！`, "red");
    }
    refreshUI();
    saveGame(true);
}

function signin() {
    const now = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    if (now - player.lastSignin < oneDay) {
        const remain = oneDay - (now - player.lastSignin);
        const h = Math.floor(remain / 3600000);
        const m = Math.floor((remain % 3600000) / 60000);
        log(`⏰ 今日已签到，还需 ${h} 小时 ${m} 分钟。`, "orange");
        return;
    }
    player.lastSignin = now;
    player.signinCount = (player.signinCount || 0) + 1;
    const stone = 1000 + player.realmIndex * 500;
    const herb = 5 + player.realmIndex;
    player.stone += stone;
    player.herb += herb;
    player.lawPower += 5;
    log(`🎁 签到成功！第 ${player.signinCount} 天，灵石 +${stone}，灵草 +${herb}，法则 +5`, "gold");
    if (player.signinCount >= 7) unlockAchievement("signin_7");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 完成第 ${player.signinCount} 天签到！`);
    refreshUI();
    saveGame(true);
}

function checkOnlineReward() {
    const now = Date.now();
    if (now - player.lastOnlineReward >= 1000 * 60 * 5) {
        player.lastOnlineReward = now;
        const stone = 200 + player.realmIndex * 100;
        const herb = 1 + Math.floor(player.realmIndex / 3);
        player.stone += stone;
        player.herb += herb;
        log(`⏳ 在线奖励！灵石 +${stone}，灵草 +${herb}`, "cyan");
        refreshUI();
        saveGame(true);
    }
}
setInterval(checkOnlineReward, 30000);

async function showRanking() {
    log("🏆 正在查询封神榜...", "gold");
    try {
        const list = await fetchRanking();
        if (!list || list.length === 0) { log("暂无数据", "gray"); return; }
        log("━━━━━━━━ 🏆 封神榜 ━━━━━━━━", "gold");
        list.slice(0, 10).forEach((p, i) => {
            const medal = ["🥇","🥈","🥉"][i] || `${i+1}.`;
            const sectTag = p.sect ? ` [${p.sect}]` : "";
            log(`${medal} ${p.name}${sectTag} — ${p.realm}·${p.stage}（${p.power.toLocaleString()}）`, i < 3 ? "gold" : "cyan");
        });
        log("━━━━━━━━━━━━━━━━━━━━", "gold");
    } catch (e) {
        log("❌ 查询失败：" + e.message, "red");
    }
}

function showAchievements() {
    log("📜 成就列表：", "gold");
    ACHIEVEMENTS.forEach(a => {
        const unlocked = player.achievements[a.id];
        log(`  ${unlocked ? "✅" : "⬜"} 【${a.name}】${a.desc}`, unlocked ? "lime" : "gray");
    });
}

function showTitles() {
    log("🏅 称号列表：", "gold");
    TITLES.forEach(t => {
        const unlocked = t.cond(player);
        const equipped = player.title === t.id;
        log(`  ${unlocked ? "✅" : "🔒"} 【${t.name}】${equipped ? "（已装备）" : ""}`, unlocked ? "gold" : "gray");
    });
    log("💡 输入「装备称号 称号id」可更换", "orange");
}

function equipTitle(id) {
    const t = TITLES.find(t => t.id === id);
    if (!t) { log("❌ 没有这个称号", "red"); return; }
    if (!t.cond(player)) { log("❌ 条件未达成", "red"); return; }
    player.title = id;
    log(`✅ 已装备称号【${t.name}】`, "gold");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 装备了称号【${t.name}】`);
    refreshUI();
    saveGame(true);
}

async function showBoss() {
    log("👹 查询世界BOSS...", "orange");
    try {
        ensureBoss(boss => {
            if (boss.hp <= 0) {
                log("🎉 上一只BOSS已被击败！", "gold");
                return;
            }
            const pct = ((boss.hp / boss.maxHp) * 100).toFixed(1);
            log(`━━━━━━━━ 👹 ${boss.name} ━━━━━━━━`, "red");
            log(`血量：${boss.hp.toLocaleString()} / ${boss.maxHp.toLocaleString()}（${pct}%）`, "orange");
            const myDmg = (boss.damage && boss.damage[playerName]) || 0;
            log(`你的伤害：${myDmg.toLocaleString()}`, "cyan");
            log("💡 输入「打boss」攻击", "gold");
        });
    } catch (e) {
        log("❌ " + e.message, "red");
    }
}

async function hitBoss() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    const dmg = Math.max(1, Math.floor(absQ * 1 + Math.random() * absQ * 0.5 + 10));

    try {
        const boss = await attackBoss(dmg);
        unlockAchievement("boss_hit");
        if (boss && boss.hp <= 0) {
            log(`🎉 BOSS 被击败！造成 ${dmg.toLocaleString()} 点伤害`, "gold");
            const rewardStone = 10000 + player.realmIndex * 5000;
            const rewardHerb = 20 + player.realmIndex * 2;
            player.stone += rewardStone;
            player.herb += rewardHerb;
            player.bossKills = (player.bossKills || 0) + 1;
            log(`🎁 奖励：灵石 +${rewardStone}，灵草 +${rewardHerb}`, "lime");
            if (typeof broadcastSys === "function") broadcastSys(`世界BOSS 被 ${playerName} 击杀！`);
        } else if (boss) {
            const pct = ((boss.hp / boss.maxHp) * 100).toFixed(1);
            log(`⚔️ 造成 ${dmg.toLocaleString()} 伤害！剩余 ${boss.hp.toLocaleString()}（${pct}%）`, "orange");
            progressDaily("boss_hit_3");
        }
        refreshUI();
        saveGame(true);
    } catch (e) {
        log("❌ " + e.message, "red");
    }
}

function showStatus() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    const realmList = q >= 0 ? REALMS : EVIL_REALMS;
    const rs = calcRealmStage(absQ);

    log(`━━━━━━━━ 📜 玩家详情 ━━━━━━━━`, "gold");
    log(`境界：${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}`, "cyan");
    log(`修为：${q.toLocaleString()}`, "lime");
    log(`灵石：${player.stone.toLocaleString()}`, "gold");
    log(`灵草：${player.herb}`, "lime");
    log(`灵力：${player.mana}/${player.maxMana}`, "cyan");
    log(`法则能量：${player.lawPower}`, "cyan");
    log(`灵根：${ROOTS[player.root]}（×${ROOT_MULT[player.root]}）`, "orange");
    log(`体质：${player.physique}`, "gold");
    log(`元素：${player.elements.join("·") || "无"}`, "purple");
    if (player.sect) log(`门派：${player.sect}（${SECTS[player.sect]?.desc || ""}）`, "lime");
    if (player.master) log(`师父：${player.master}`, "orange");
    if (player.disciple) log(`徒弟：${player.disciple}`, "orange");
    if (player.partner) log(`道侣：${player.partner}`, "pink");

    const itemEntries = Object.entries(player.items);
    if (itemEntries.length > 0) {
        log(`📦 背包：`, "gold");
        itemEntries.forEach(([n, c]) => log(`  ${n} ×${c}`, "gray"));
    }

    log(`🔮 元素法则：`, "cyan");
    for (const e of player.elements) {
        const d = player.lawElements[e] || {exp: 0, level: 0};
        log(`  ${e}：${d.exp} 经验 | ${getElementLevelName(d.level)}`, "gray");
    }

    const nextPill = getBreakthroughPill(rs.realmIndex + 1);
    log(`🧪 下一个突破丹：${nextPill}`, "orange");
    log(`📊 战斗次数：${player.totalFights} | BOSS击杀：${player.bossKills}`, "gray");
    log(`━━━━━━━━━━━━━━━━━━━━`, "gold");
}

// ============ 段 5 ============
// （继续粘贴）// ============ 门派 ============
function showSects() {
    log("🏛️ 可加入的门派：", "gold");
    for (const [name, info] of Object.entries(SECTS)) {
        log(`  【${name}】(${info.type}) - ${info.desc}`, info.type === "正道" ? "cyan" : "purple");
    }
    log(`当前门派：${player.sect || "无"}`, "lime");
    log("💡 输入「入门派 门派名」加入，或「退门派」退出", "orange");
}

function joinSect(name) {
    if (!SECTS[name]) { log("❌ 没有这个门派", "red"); return; }
    if (player.sect) { log("❌ 你已有门派，先退门派", "orange"); return; }
    player.sect = name;
    log(`✅ 加入【${name}】！${SECTS[name].desc}`, "gold");
    unlockAchievement("sect_join");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 加入了【${name}】！`);
    refreshUI();
    saveGame(true);
}

function leaveSect() {
    if (!player.sect) { log("❌ 你没有门派", "orange"); return; }
    const old = player.sect;
    player.sect = null;
    log(`👋 退出【${old}】`, "orange");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 退出了【${old}】`);
    refreshUI();
    saveGame(true);
}

// ============ 师徒 ============
function showMasterPanel() {
    log("🎓 师徒系统：", "gold");
    log(`师父：${player.master || "无"}`, "cyan");
    log(`徒弟：${player.disciple || "无"}`, "cyan");
    log("💡 输入「拜师 玩家名」/「收徒 玩家名」/「解除师徒」", "orange");
}

async function becomeMaster(targetName) {
    if (player.disciple) { log("❌ 你已有徒弟", "orange"); return; }
    const list = await fetchRanking();
    const target = list.find(p => p.name === targetName);
    if (!target) { log("❌ 该玩家不在线或不存在", "red"); return; }
    if (Math.abs(target.power) > Math.abs(player.power)) {
        log("❌ 对方修为比你高，无法收为徒弟", "red");
        return;
    }
    player.disciple = targetName;
    log(`✅ 收【${targetName}】为徒！`, "gold");
    unlockAchievement("master");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 收【${targetName}】为徒！`);
    saveGame(true);
}

async function becomeDisciple(targetName) {
    if (player.master) { log("❌ 你已有师父", "orange"); return; }
    const list = await fetchRanking();
    const target = list.find(p => p.name === targetName);
    if (!target) { log("❌ 该玩家不在线", "red"); return; }
    if (Math.abs(target.power) < Math.abs(player.power)) {
        log("❌ 对方修为比你低，无法拜师", "red");
        return;
    }
    player.master = targetName;
    log(`✅ 拜【${targetName}】为师！`, "gold");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 拜【${targetName}】为师！`);
    saveGame(true);
}

function clearMaster() {
    player.master = null;
    player.disciple = null;
    log("✅ 已解除师徒关系", "orange");
    saveGame(true);
}

// ============ 道侣 ============
function showPartnerPanel() {
    log("💍 道侣系统：", "gold");
    log(`当前道侣：${player.partner || "无"}`, "cyan");
    log("💡 输入「结为道侣 玩家名」/「解除道侣」", "orange");
    log("💡 道侣双修加成：修炼速度 +30%", "gold");
}

async function becomePartner(targetName) {
    if (player.partner) { log("❌ 你已有道侣", "orange"); return; }
    const list = await fetchRanking();
    const target = list.find(p => p.name === targetName);
    if (!target) { log("❌ 该玩家不在线", "red"); return; }
    player.partner = targetName;
    log(`💕 与【${targetName}】结为道侣！`, "pink");
    unlockAchievement("partner");
    if (typeof broadcastSys === "function") broadcastSys(`💕 ${playerName} 与 ${targetName} 结为道侣！`);
    saveGame(true);
}

function clearPartner() {
    player.partner = null;
    log("💔 已解除道侣", "orange");
    saveGame(true);
}

// ============ 切磋 ============
async function duel(targetName) {
    const list = await fetchRanking();
    const target = list.find(p => p.name === targetName);
    if (!target) { log("❌ 该玩家不在线", "red"); return; }

    const myPower = Math.abs(player.power);
    const targetPower = Math.abs(target.power);
    const winChance = myPower / (myPower + targetPower);

    const win = Math.random() < winChance;
    if (win) {
        const reward = Math.floor(targetPower * 0.1);
        player.stone += reward;
        player.power += Math.floor(myPower * 0.02);
        log(`🏆 你战胜了【${targetName}】！灵石 +${reward.toLocaleString()}`, "gold");
        if (typeof broadcastSys === "function") broadcastSys(`⚔️ ${playerName} 切磋战胜了 ${targetName}！`);
    } else {
        const lose = Math.floor(myPower * 0.05);
        player.power -= lose;
        player.stone = Math.max(0, player.stone - Math.floor(myPower * 0.02));
        log(`💀 你败给了【${targetName}】！修为 -${lose}`, "red");
        if (typeof broadcastSys === "function") broadcastSys(`⚔️ ${targetName} 切磋战胜了 ${playerName}！`);
    }
    refreshUI();
    saveGame(true);
}

// ============ 交易行 ============
async function showMarket() {
    log("🏦 交易行（正在加载）...", "gold");
    try {
        const list = await fetchMarket();
        if (list.length === 0) { log("暂无挂单", "gray"); return; }
        log("━━━━━━━━ 🏦 交易行 ━━━━━━━━", "gold");
        list.slice(0, 20).forEach((item, i) => {
            log(`  [${i+1}] ${item.seller} 出售 ${item.itemName} ×${item.count} - ${item.price.toLocaleString()} 灵石`, "cyan");
        });
        log("💡 输入「挂单 物品名 价格 数量」出售", "orange");
        log("💡 输入「购买挂单 序号」购买", "orange");
    } catch (e) {
        log("❌ " + e.message, "red");
    }
}

async function listMarketItem(itemName, price, count) {
    if (!player.items[itemName] || player.items[itemName] < count) {
        log("❌ 你没有足够的物品", "red");
        return;
    }
    player.items[itemName] -= count;
    if (player.items[itemName] <= 0) delete player.items[itemName];
    await listItem(itemName, price, count);
    log(`✅ 挂单成功：${itemName} ×${count} - ${price.toLocaleString()} 灵石`, "gold");
    refreshUI();
    saveGame(true);
}

async function buyMarket(key) {
    const item = await buyMarketItem(key);
    if (!item) { log("❌ 该挂单不存在", "red"); return; }
    if (item.error) { log("❌ " + item.error, "red"); return; }
    if (player.stone < item.price) { log("❌ 灵石不足", "red"); return; }
    player.stone -= item.price;
    player.items[item.itemName] = (player.items[item.itemName] || 0) + item.count;
    log(`✅ 购买了 ${item.itemName} ×${item.count}`, "lime");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 从交易行购买了 ${item.itemName}×${item.count}`);
    refreshUI();
    saveGame(true);
}

// ============ 地图 ============
function showMap() {
    log("🌍 地图区域：", "gold");
    const absQ = Math.abs(player.power);
    const rs = calcRealmStage(absQ);
    MAPS.forEach((m, i) => {
        const unlocked = rs.realmIndex >= m.minRealm;
        log(`  ${unlocked ? "✅" : "🔒"} [${i+1}] ${m.name} - ${m.desc}（需境界 ${m.minRealm}）`, unlocked ? "cyan" : "gray");
    });
    log("💡 输入「去 地图名」或「去 序号」进入", "orange");
    log(`当前在：${player.currentMap || "新手村"}`, "lime");
}

function goMap(mapName) {
    const absQ = Math.abs(player.power);
    const rs = calcRealmStage(absQ);
    const map = MAPS.find(m => m.name === mapName) || MAPS.find((m, i) => i + 1 === parseInt(mapName));
    if (!map) { log("❌ 没有这个地图", "red"); return; }
    if (rs.realmIndex < map.minRealm) {
        log(`❌ 需要境界 ${map.minRealm}，你还不够`, "red");
        return;
    }
    player.currentMap = map.name;
    log(`🌍 你进入了【${map.name}】`, "lime");
    log(`  该地图怪物：${map.monsters.join("、")}`, "cyan");
    saveGame(true);
}

// ============ 每日任务 ============
function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

function refreshDaily() {
    const today = getTodayStr();
    if (player.dailyDate !== today) {
        player.dailyDate = today;
        player.dailyProgress = {};
        player.dailyDone = false;
        // 随机选3个任务
        const shuffled = [...DAILY_TASKS].sort(() => Math.random() - 0.5);
        player.dailyTasks = shuffled.slice(0, 3).map(t => t.id);
    }
}

function progressDaily(taskId) {
    refreshDaily();
    if (player.dailyDone) return;
    const task = DAILY_TASKS.find(t => t.id === taskId);
    if (!task || !player.dailyTasks || !player.dailyTasks.includes(taskId)) return;
    player.dailyProgress[taskId] = (player.dailyProgress[taskId] || 0) + 1;
    if (player.dailyProgress[taskId] >= task.target) {
        log(`✅ 每日任务完成：【${task.name}】`, "gold");
    }
    // 检查是否全部完成
    if (player.dailyTasks.every(id => {
        const t = DAILY_TASKS.find(x => x.id === id);
        return t && (player.dailyProgress[id] || 0) >= t.target;
    })) {
        player.dailyDone = true;
        const bonus = {stone: 10000, herb: 50, lawPower: 20};
        player.stone += bonus.stone;
        player.herb += bonus.herb;
        player.lawPower += bonus.lawPower;
        log(`🎉 全部每日任务完成！奖励：灵石+${bonus.stone}，灵草+${bonus.herb}，法则+${bonus.lawPower}`, "gold");
        if (typeof broadcastSys === "function") broadcastSys(`${playerName} 完成了今日全部每日任务！`);
    }
    saveGame(true);
}

function showDaily() {
    refreshDaily();
    log("📅 今日任务：", "gold");
    if (player.dailyDone) {
        log("  ✅ 今日全部完成！明天再来。", "lime");
        return;
    }
    player.dailyTasks.forEach(id => {
        const t = DAILY_TASKS.find(x => x.id === id);
        const p = player.dailyProgress[id] || 0;
        const done = p >= t.target;
        log(`  ${done ? "✅" : "⏳"} ${t.name}（${p}/${t.target}）奖励：灵石+${t.reward.stone} 灵草+${t.reward.herb}`, done ? "lime" : "cyan");
    });
}

// ============ 灵脉 ============
async function showLeyline() {
    log("⚡ 灵脉争夺（每小时刷新）：", "gold");
    try {
        ensureLeylines(data => {
            for (const [name, info] of Object.entries(data)) {
                const owner = info.owner || "无主";
                log(`  【${name}】占有者：${owner}（${info.power.toLocaleString()} 灵气）`, info.owner === playerName ? "gold" : "cyan");
            }
            log("💡 输入「占灵脉 灵脉名」占领", "orange");
        });
    } catch (e) {
        log("❌ " + e.message, "red");
    }
}

async function claimLeylineByName(name) {
    try {
        const data = await claimLeyline(name);
        if (!data || !data[name]) { log("❌ 灵脉不存在", "red"); return; }
        const reward = Math.floor(data[name].power * 0.1);
        player.stone += reward;
        player.lawPower += 10;
        log(`⚡ 占领【${name}】！灵石 +${reward.toLocaleString()}，法则 +10`, "gold");
        unlockAchievement("leyline_owner");
        if (typeof broadcastSys === "function") broadcastSys(`⚡ ${playerName} 占领了【${name}】！`);
        refreshUI();
        saveGame(true);
    } catch (e) {
        log("❌ " + e.message, "red");
    }
}

// ============ 抽奖 ============
function lottery() {
    const cost = 5000;
    if (player.stone < cost) {
        log(`❌ 抽奖需要 ${cost.toLocaleString()} 灵石`, "red");
        return;
    }
    player.stone -= cost;
    const totalWeight = LOTTERY_POOL.reduce((s, i) => s + i.weight, 0);
    let rand = Math.random() * totalWeight;
    let acc = 0;
    let result = LOTTERY_POOL[0];
    for (const item of LOTTERY_POOL) {
        acc += item.weight;
        if (rand <= acc) { result = item; break; }
    }
    player.items[result.name] = (player.items[result.name] || 0) + 1;
    log(`🎰 抽奖！恭喜获得【${result.name}】！`, "gold");
    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 抽奖获得【${result.name}】！`);
    refreshUI();
    saveGame(true);
}

// ============ 段 6 ============
// （继续粘贴）function handleChat(cmd) {
    if (!cmd) return;

    // 私聊
    if (cmd.startsWith("/w ") || cmd.startsWith("私聊 ")) {
        const rest = cmd.startsWith("/w ") ? cmd.substring(3) : cmd.substring(3);
        const firstSpace = rest.indexOf(" ");
        if (firstSpace === -1) { log("❌ 格式：/w 玩家名 消息", "orange"); return; }
        const to = rest.substring(0, firstSpace).trim();
        const text = rest.substring(firstSpace + 1).trim();
        if (typeof sendChat === "function") sendChat(text, to);
        if (typeof chatLog === "function") chatLog(`【私聊 → ${to}】${text}`, "me");
        progressDaily("chat_5");
        return;
    }

    if (cmd.startsWith("改名 ")) {
        if (typeof changeName === "function") changeName(cmd.substring(3).trim());
        return;
    }

    if (cmd.startsWith("入门派 ")) { joinSect(cmd.substring(4).trim()); return; }
    if (cmd === "退门派") { leaveSect(); return; }
    if (cmd.startsWith("拜师 ")) { becomeDisciple(cmd.substring(3).trim()); return; }
    if (cmd.startsWith("收徒 ")) { becomeMaster(cmd.substring(3).trim()); return; }
    if (cmd === "解除师徒") { clearMaster(); return; }
    if (cmd.startsWith("结为道侣 ")) { becomePartner(cmd.substring(5).trim()); return; }
    if (cmd === "解除道侣") { clearPartner(); return; }
    if (cmd.startsWith("切磋 ")) { duel(cmd.substring(3).trim()); return; }
    if (cmd.startsWith("挂单 ")) {
        const parts = cmd.substring(3).trim().split(/\s+/);
        if (parts.length < 3) { log("❌ 格式：挂单 物品名 价格 数量", "orange"); return; }
        listMarketItem(parts[0], parseInt(parts[1]), parseInt(parts[2]));
        return;
    }
    if (cmd.startsWith("购买挂单 ")) {
        const idx = parseInt(cmd.substring(5).trim());
        showMarket().then(() => {
            // 这里简化：用户输入序号后再手动查找挂单
            log("💡 由于挂单使用 Firebase key，请直接点击交易行中的物品名", "orange");
        });
        return;
    }
    if (cmd.startsWith("去 ")) { goMap(cmd.substring(2).trim()); return; }
    if (cmd.startsWith("占灵脉 ")) { claimLeylineByName(cmd.substring(4).trim()); return; }
    if (cmd.startsWith("装备称号 ")) { equipTitle(cmd.substring(5).trim()); return; }

    if (cmd === "修为划分" || cmd === "体质划分" || cmd === "灵根划分" || cmd === "元素划分"
        || cmd === "查看详情" || cmd === "状态" || cmd === "坊市" || cmd === "帮助"
        || cmd.startsWith("买 ") || cmd.startsWith("用 ") || cmd.startsWith("炼 ")
        || cmd === "炼丹炉" || cmd === "存档" || cmd === "save" || cmd === "help"
        || cmd === "打boss" || cmd === "封神榜" || cmd === "排行榜" || cmd === "签到" || cmd === "成就"
        || cmd === "门派" || cmd === "师徒" || cmd === "道侣" || cmd === "交易行"
        || cmd === "地图" || cmd === "每日" || cmd === "灵脉" || cmd === "抽奖" || cmd === "称号") {
        handleLocalCommand(cmd);
        return;
    }

    if (typeof sendChat === "function") sendChat(cmd);
    progressDaily("chat_5");
}

function handleLocalCommand(cmd) {
    if (cmd === "修为划分") { log("✨ 正道：" + REALMS.join(" → "), "gold"); return; }
    if (cmd === "体质划分") { PHYSIQUES.forEach(p => log(`${p.name} | 修炼 +${p.cultivateBonus}`, "cyan")); return; }
    if (cmd === "灵根划分") { ROOTS.forEach((r, i) => log(`${i}. ${r} ×${ROOT_MULT[i]}`, "orange")); return; }
    if (cmd === "元素划分") { ELEMENTS.forEach(e => log(`元素：${e}`, "purple")); return; }
    if (cmd === "查看详情" || cmd === "状态") { showStatus(); return; }
    if (cmd === "坊市") { shop(); return; }
    if (cmd === "炼丹炉") { alchemy(); return; }
    if (cmd.startsWith("买 ")) { buyPill(cmd.substring(2).trim()); return; }
    if (cmd.startsWith("用 ")) { usePill(cmd.substring(2).trim()); return; }
    if (cmd.startsWith("炼 ")) { craftPill(cmd.substring(2).trim()); return; }
    if (cmd === "存档" || cmd === "save") { saveGame(); return; }
    if (cmd === "打boss") { hitBoss(); return; }
    if (cmd === "封神榜" || cmd === "排行榜") { showRanking(); return; }
    if (cmd === "签到") { signin(); return; }
    if (cmd === "成就") { showAchievements(); return; }
    if (cmd === "门派") { showSects(); return; }
    if (cmd === "师徒") { showMasterPanel(); return; }
    if (cmd === "道侣") { showPartnerPanel(); return; }
    if (cmd === "交易行") { showMarket(); return; }
    if (cmd === "地图") { showMap(); return; }
    if (cmd === "每日") { showDaily(); return; }
    if (cmd === "灵脉") { showLeyline(); return; }
    if (cmd === "抽奖") { lottery(); return; }
    if (cmd === "称号") { showTitles(); return; }
    if (cmd === "帮助" || cmd === "help") {
        log("📖 6.0 全部指令：", "cyan");
        log("  [基础] 买/用/炼 丹药名、查看详情、坊市、炼丹炉、签到、打boss、封神榜、成就", "gray");
        log("  [社交] 入门派/退门派、拜师/收徒/解除师徒、结为道侣/解除道侣、切磋 玩家名、装备称号 id", "gray");
        log("  [探索] 地图、去 地图名、占灵脉 灵脉名、每日、抽奖", "gray");
        log("  [交易] 交易行、挂单 物品名 价格 数量", "gray");
        log("  [聊天] /w 玩家名 消息、改名 新名字", "gray");
        return;
    }
}

document.getElementById("actions").addEventListener("click", e => {
    // 跳过 tab-btn
    if (e.target.classList.contains("tab-btn")) return;
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "cultivate") cultivate(false);
    else if (action === "cultivate-mo") cultivate(true);
    else if (action === "fight") fight();
    else if (action === "adventure") adventure();
    else if (action === "breakthrough") breakthrough();
    else if (action === "use-law") useLawPower();
    else if (action === "shop") shop();
    else if (action === "alchemy") alchemy();
    else if (action === "signin") signin();
    else if (action === "status") showStatus();
    else if (action === "save") saveGame();
    else if (action === "reset") {
        if (confirm("确定要重新开始吗？")) {
            localStorage.removeItem(SAVE_KEY);
            location.reload();
        }
    }
    else if (action === "sect") showSects();
    else if (action === "master") showMasterPanel();
    else if (action === "partner") showPartnerPanel();
    else if (action === "duel") {
        const name = prompt("输入要切磋的玩家名：");
        if (name) duel(name.trim());
    }
    else if (action === "ranking") showRanking();
    else if (action === "achievement") showAchievements();
    else if (action === "title") showTitles();
    else if (action === "map") showMap();
    else if (action === "boss") showBoss();
    else if (action === "leyline") showLeyline();
    else if (action === "daily") showDaily();
    else if (action === "lottery") lottery();
    else if (action === "market") showMarket();
    else if (action === "my-market") showMarket();
});

// Tab 切换
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".actions-group").forEach(g => g.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("actions-" + btn.dataset.tab).classList.add("active");
    });
});

document.getElementById("chat-send").addEventListener("click", () => {
    const input = document.getElementById("chat-input");
    handleChat(input.value.trim());
    input.value = "";
});
document.getElementById("chat-input").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const input = document.getElementById("chat-input");
        handleChat(input.value.trim());
        input.value = "";
    }
});

function start() {
    const saved = loadGame();
    if (saved) {
        player = saved;
        log("💾 读取存档成功！", "lime");
    } else {
        player = defaultPlayer();
        log(`🌌 你觉醒了【${ROOTS[player.root]}】，体质【${player.physique}】。`, "cyan");
        log("点击下方按钮开始修仙。输入「帮助」查看指令。", "gray");
    }
    if (!player.currentMap) player.currentMap = "新手岛";
    chatLog("✨ 太初烬寰 6.0 已启动 ✨", "sys");
    chatLog("💡 输入「帮助」查看全部指令", "sys");
    refreshDaily();
    refreshUI();
    if (typeof listenBoss === "function") {
        listenBoss(boss => {
            if (boss && boss.hp > 0) window._boss = boss;
        });
    }
}

if (typeof firebase !== "undefined") {
    setTimeout(start, 300);
} else {
    start();
}
