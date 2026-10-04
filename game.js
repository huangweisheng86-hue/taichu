// ============ 数据定义 ============
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

// ============ 怪物表 ============
// 每只怪有：名字、要求修为、掉落灵石范围、掉落灵草数量
const MONSTERS = [
    {name:"野兔",   reqPower: 0,    stone:[5, 15],   herb: 0},
    {name:"灰狼",   reqPower: 50,   stone:[15, 40],  herb: 1},
    {name:"山猪",   reqPower: 150,  stone:[30, 80],  herb: 1},
    {name:"毒蛇",   reqPower: 400,  stone:[80, 200], herb: 2},
    {name:"黑熊",   reqPower: 1000, stone:[200, 500], herb: 2},
    {name:"妖狐",   reqPower: 3000, stone:[500, 1200], herb: 3},
    {name:"火麟兽", reqPower: 8000, stone:[1200, 3000], herb: 4},
    {name:"雷鹰",   reqPower: 20000, stone:[3000, 8000], herb: 5},
    {name:"蛟龙",   reqPower: 60000, stone:[8000, 20000], herb: 6},
    {name:"千年树妖", reqPower: 200000, stone:[20000, 60000], herb: 8},
    {name:"上古凶兽", reqPower: 800000, stone:[60000, 150000], herb: 10},
    {name:"太古魔龙", reqPower: 3000000, stone:[150000, 500000], herb: 15}
];

// ============ 丹药表（价格按灵石算，贵！）============
const PILLS = {
    "初级修为丹":   {price: 100,     effect: {power: 100},       desc: "+100 修为"},
    "中级修为丹":   {price: 1000,    effect: {power: 1000},      desc: "+1000 修为"},
    "高级修为丹":   {price: 10000,   effect: {power: 10000},     desc: "+10000 修为"},
    "极品修为丹":   {price: 100000,  effect: {power: 100000},    desc: "+10万 修为"},
    "仙品修为丹":   {price: 1000000, effect: {power: 1000000},   desc: "+100万 修为"},
    "洗髓丹":       {price: 50000,   effect: {refineRoot: true}, desc: "随机改变灵根"},
    "天地元素丹":   {price: 80000,   effect: {refineElements: true}, desc: "重铸元素"},
    // 突破丹
    "初级突破丹":   {price: 500,     effect: {breakthroughPill: true}, desc: "突破到 淬体~开源 用"},
    "中级突破丹":   {price: 5000,    effect: {breakthroughPill: true}, desc: "突破到 筑基~化神 用"},
    "高级突破丹":   {price: 50000,   effect: {breakthroughPill: true}, desc: "突破到 练虚~圣皇 用"},
    "顶级突破丹":   {price: 500000,  effect: {breakthroughPill: true}, desc: "突破到 仙骨~仙尊 用"},
    "仙级突破丹":   {price: 5000000, effect: {breakthroughPill: true}, desc: "突破到 仙帝~大帝 用"},
    "神级突破丹":   {price: 50000000, effect: {breakthroughPill: true}, desc: "突破到 天帝~太初之主 用"}
};

// ============ 突破丹对应境界 ============
function getBreakthroughPill(realmIndex) {
    if (realmIndex <= 4) return "初级突破丹";
    if (realmIndex <= 8) return "中级突破丹";
    if (realmIndex <= 16) return "高级突破丹";
    if (realmIndex <= 24) return "顶级突破丹";
    if (realmIndex <= 27) return "仙级突破丹";
    if (realmIndex <= 30) return "神级突破丹";
    return "神级突破丹";
}

// ============ 炼丹配方 ============
// 每种丹药需要多少灵草，成功率
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

let player = null;

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
        stone: 0,
        herb: 0,
        lawPower: 50,
        root: root,
        elements: generateRandomElements(),
        physique: generateRandomPhysique(),
        lawElements: lawElements,
        items: {},
        age: 16, life: 80,
        lastCultivate: 0
    };
}

// ============ 工具函数 ============
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

// ============ 存档 ============
const SAVE_KEY = "taichu_xiuxian_save_v2";

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
        if (p.lastCultivate === undefined) p.lastCultivate = 0;
        if (p.stone === undefined) p.stone = 0;
        if (p.herb === undefined) p.herb = 0;
        return p;
    } catch (e) { return null; }
}

// ============ 日志 ============
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

// ============ 刷新界面 ============
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

    updateCooldownButton();
}

// ============ 冷却 ============
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

// ============ 修炼 ============
function cultivate(isMo) {
    const now = Date.now();
    if (now - player.lastCultivate < CULTIVATE_CD) {
        log(`⏳ 修炼冷却中，还需 ${((CULTIVATE_CD - (now - player.lastCultivate)) / 1000).toFixed(1)} 秒`, "orange");
        return;
    }
    player.lastCultivate = now;

    const mult = ROOT_MULT[player.root];
    const physiqueData = getPhysiqueData(player.physique);
    const physiqueBonus = physiqueData ? physiqueData.cultivateBonus : 0;

    const rawGain = Math.floor(Math.random() * 5) + 1;
    const rootBonus = rawGain * (mult - 1);
    const cultivateGain = rawGain + rootBonus + physiqueBonus;

    if (isMo) {
        player.power -= cultivateGain;
        log(`🌑 魔道修炼：基础 ${rawGain} + 灵根加成 ${rootBonus} + 体质加成 ${physiqueBonus} = 修为 -${cultivateGain}`, "purple");
    } else {
        player.power += cultivateGain;
        log(`☯ 打坐修炼：基础 ${rawGain} + 灵根加成 ${rootBonus} + 体质加成 ${physiqueBonus} = 修为 +${cultivateGain}`, "lime");
        if (Math.random() < 0.6 / mult) {
            const moGain = Math.floor(Math.random() * 2 * mult) + 1;
            player.power -= moGain;
            log(`😈 受到 ${moGain} 魔气侵蚀！`, "red");
        }
    }

    player.mana = Math.min(player.maxMana, player.mana + 5);
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 打怪 ============
function fight() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;

    // 找到玩家当前打得过的怪中，最强的一只
    let strongest = null;
    for (const m of MONSTERS) {
        if (absQ >= m.reqPower) strongest = m;
        else break;
    }

    if (!strongest) {
        log(`⚠️ 你修为太低，连最弱的野兔都打不过！先去修炼吧。`, "orange");
        return;
    }

    // 5% 概率遇到更强的怪（要求 = 当前 * 1.5）
    let monster = strongest;
    if (Math.random() < 0.05) {
        const nextIdx = MONSTERS.indexOf(strongest) + 1;
        if (nextIdx < MONSTERS.length && absQ < MONSTERS[nextIdx].reqPower) {
            monster = MONSTERS[nextIdx];
            log(`⚡ 意外遭遇更强怪物：${monster.name}！`, "orange");
        }
    }

    // 判定胜负
    const winChance = absQ / monster.reqPower;
    if (winChance >= 1) {
        // 稳赢
        const stone = Math.floor(Math.random() * (monster.stone[1] - monster.stone[0] + 1)) + monster.stone[0];
        const herbGain = monster.herb > 0 ? Math.floor(Math.random() * (monster.herb + 1)) : 0;
        player.stone += stone;
        player.herb += herbGain;
        const powerGain = Math.floor(monster.reqPower * 0.05);
        player.power += q >= 0 ? powerGain : -powerGain;
        log(`⚔️ 你击败了【${monster.name}】！`, "lime");
        log(`  获得灵石 +${stone}，灵草 +${herbGain}，修为 +${powerGain}`, "cyan");
        if (typeof broadcastSys === "function" && Math.random() < 0.1) {
            broadcastSys(`${playerName} 击败了【${monster.name}】！`);
        }
    } else {
        // 打不过
        const lose = Math.floor(monster.reqPower * 0.1);
        player.power -= q >= 0 ? lose : -lose;
        player.mana = Math.max(0, player.mana - 30);
        log(`💀 你挑战【${monster.name}】失败！修为 -${lose}，灵力 -30。`, "red");
    }

    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 历练 ============
function adventure() {
    const roll = Math.random();
    if (roll < 0.15) {
        player.mana = Math.max(0, player.mana - 20);
        log(`🗡 你遇到妖兽袭击，灵力 -20！`, "red");
    } else if (roll < 0.35) {
        log(`🍃 你游历一番，一无所获。`, "gray");
    } else if (roll < 0.7) {
        const gain = Math.floor(Math.random() * 100) + 20;
        player.power += gain;
        log(`💎 你发现一处灵矿，修为 +${gain}。`, "cyan");
    } else if (roll < 0.9) {
        const gain = Math.floor(Math.random() * 300) + 100;
        const herb = Math.floor(Math.random() * 3) + 1;
        player.power += gain;
        player.herb += herb;
        log(`🌟 你误入灵脉之地，修为 +${gain}，灵草 +${herb}！`, "gold");
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

// ============ 突破（大境界要丹）============
function breakthrough() {
    const absQ = player.power >= 0 ? player.power : -player.power;
    const rs = calcRealmStage(absQ);
    if (rs.needForNext <= 0) {
        log("❌ 已至当前境界巅峰，无法继续突破。", "red");
        return;
    }

    // 判断：这次突破是否跨大境界？
    // 小境界突破：当前 stageIndex 不是最后一个，且加上 needForNext 后 stageIndex 会变，但 realmIndex 不变
    // 简单判断：needForNext 加上后，realmIndex 是否会 +1
    const willRealmUp = (rs.stageIndex === STAGES.length - 1);

    if (willRealmUp) {
        // 需要突破丹
        const pillName = getBreakthroughPill(rs.realmIndex + 1);
        if (!player.items[pillName] || player.items[pillName] <= 0) {
            log(`❌ 突破大境界需要【${pillName}】，你没有！去坊市买或炼丹炉炼。`, "red");
            return;
        }
        player.items[pillName]--;
        if (player.items[pillName] <= 0) delete player.items[pillName];
        log(`✨ 消耗【${pillName}】！`, "gold");
    }

    // 修为推进
    const gain = rs.needForNext;
    player.power += player.power >= 0 ? gain : -gain;
    log(`⚡ 强行突破，修为 +${gain}！`, "orange");
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 突破检测 ============
let lastRealmKey = "";
function checkBreakthrough() {
    const q = player.power;
    const absQ = q >= 0 ? q : -q;
    const realmList = q >= 0 ? REALMS : EVIL_REALMS;
    const rs = calcRealmStage(absQ);
    const sign = q >= 0 ? "good" : "evil";
    const key = `${sign}-${rs.realmIndex}-${rs.stageIndex}`;

    if (key !== lastRealmKey) {
        const oldKey = lastRealmKey;
        lastRealmKey = key;

        if (oldKey) {
            const [oldSign, oldR, oldS] = oldKey.split("-");
            const oldRi = parseInt(oldR);
            const oldSi = parseInt(oldS);

            if (sign !== oldSign) {
                if (sign === "good") {
                    log(`✨ 你顿悟正道，重返 ${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}！`, "gold");
                    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 顿悟正道，重返 ${realmList[rs.realmIndex]}！`);
                } else {
                    log(`🌑 你堕入魔道，化身 ${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}！`, "purple");
                    if (typeof broadcastSys === "function") broadcastSys(`${playerName} 堕入魔道，化身 ${realmList[rs.realmIndex]}！`);
                }
            } else if (rs.realmIndex > oldRi) {
                log(`🔥🔥🔥 突破大境界！进入【${realmList[rs.realmIndex]}】！`, "gold");
                if (typeof broadcastSys === "function") broadcastSys(`${playerName} 突破大境界，进入【${realmList[rs.realmIndex]}】！`);
                showFlash();
            } else if (rs.stageIndex > oldSi) {
                log(`💠 突破小境界，进入【${STAGES[rs.stageIndex]}】。`, "cyan");
            }
        }

        player.realmIndex = rs.realmIndex;
        player.stageIndex = rs.stageIndex;
        player.maxMana = 100 + rs.realmIndex * 20;
        player.mana = player.maxMana;
    }
}

function showFlash() {
    const flash = document.createElement("div");
    flash.className = "breakthrough-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1000);
}

// ============ 法则 ============
function useLawPower() {
    if (player.lawPower < 1) { log("❌ 法则能量不足！", "red"); return; }
    player.lawPower -= 1;
    const elements = player.elements;
    if (elements.length === 0) { log("❌ 你没有任何元素！", "red"); return; }
    const e = elements[Math.floor(Math.random() * elements.length)];
    const data = player.lawElements[e] || {exp: 0, level: 0};
    data.exp += 1;
    const nextExp = Math.pow(10, data.level + 1);
    if (data.level < 5 && data.exp >= nextExp) {
        data.exp -= nextExp;
        data.level++;
        log(`✨ ${e}之法则突破至【${getElementLevelName(data.level)}】！`, "gold");
        if (typeof broadcastSys === "function") broadcastSys(`${playerName} 的 ${e}之法则突破至【${getElementLevelName(data.level)}】！`);
    }
    player.lawElements[e] = data;
    log(`🔮 消耗 1 法则能量，${e}之法则经验 +1。`, "cyan");
    refreshUI();
    saveGame(true);
}

function getElementLevelName(level) {
    return ["一窍不通","初窥门径","小有所成","登堂入室","炉火纯青","登峰造极"][level] || "未知";
}

// ============ 坊市（灵石消费）============
function shop() {
    const items = Object.entries(PILLS);
    log("🏪 坊市（使用灵石购买）：", "gold");
    log(`💰 你的灵石：${player.stone.toLocaleString()}`, "cyan");
    items.forEach(([name, info], idx) => {
        const owned = player.items[name] || 0;
        log(`  [${idx+1}] ${name} - ${info.price.toLocaleString()} 灵石（${info.desc}）持有 ${owned}`, "gray");
    });
    log("💡 在聊天框输入「买 丹药名」或「用 丹药名」", "orange");
}

function buyPill(name) {
    const pill = PILLS[name];
    if (!pill) { log(`❌ 没有这种丹药：${name}`, "red"); return; }
    if (player.stone < pill.price) {
        log(`❌ 灵石不足，需要 ${pill.price.toLocaleString()}，当前 ${player.stone.toLocaleString()}`, "red");
        return;
    }
    player.stone -= pill.price;
    player.items[name] = (player.items[name] || 0) + 1;
    log(`🛒 你购买了【${name}】，剩余灵石 ${player.stone.toLocaleString()}。`, "lime");
    refreshUI();
    saveGame(true);
}

function usePill(name) {
    if (!player.items[name] || player.items[name] <= 0) {
        log(`❌ 你没有【${name}】`, "red");
        return;
    }
    const pill = PILLS[name];
    if (!pill) { log(`❌ 未知丹药：${name}`, "red"); return; }
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
        if (newRoot === old) log(`🍃 服用洗髓丹，但灵根未变，仍是 ${ROOTS[old]}`, "orange");
        else {
            player.root = newRoot;
            log(`✨ 洗髓成功！灵根由 ${ROOTS[old]} 变为 ${ROOTS[newRoot]}！`, "gold");
            if (typeof broadcastSys === "function") broadcastSys(`${playerName} 洗髓成功，灵根升级为 ${ROOTS[newRoot]}！`);
        }
    }
    if (pill.effect.refineElements) {
        const oldStr = player.elements.join("·");
        player.elements = generateRandomElements();
        const newLawElements = {};
        for (const e of ELEMENTS) newLawElements[e] = {exp: 0, level: 0};
        player.lawElements = newLawElements;
        log(`✨ 天地元素丹生效！元素由【${oldStr}】变为【${player.elements.join("·")}】。`, "purple");
    }
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 炼丹炉 ============
function alchemy() {
    log("⚗️ 炼丹炉（消耗灵草炼丹）：", "gold");
    log(`🌿 你的灵草：${player.herb}`, "lime");
    const entries = Object.entries(ALCHEMY);
    entries.forEach(([name, info], idx) => {
        const owned = player.items[name] || 0;
        log(`  [${idx+1}] ${name} - 灵草 ${info.herb}（成功率 ${(info.success*100).toFixed(0)}%）持有 ${owned}`, "gray");
    });
    log("💡 输入「炼 丹药名」开始炼丹", "orange");
}

function craftPill(name) {
    const recipe = ALCHEMY[name];
    if (!recipe) { log(`❌ 没有这种丹方：${name}`, "red"); return; }
    if (player.herb < recipe.herb) {
        log(`❌ 灵草不足，需要 ${recipe.herb}，当前 ${player.herb}`, "red");
        return;
    }
    player.herb -= recipe.herb;
    if (Math.random() < recipe.success) {
        player.items[name] = (player.items[name] || 0) + 1;
        log(`✨ 炼丹成功！获得【${name}】×1`, "gold");
        if (typeof broadcastSys === "function" && Math.random() < 0.3) {
            broadcastSys(`${playerName} 炼出了【${name}】！`);
        }
    } else {
        log(`💥 炼丹失败！${recipe.herb} 灵草化为灰烬。`, "red");
    }
    refreshUI();
    saveGame(true);
}

// ============ 查看详情 ============
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
    log(`灵根：${ROOTS[player.root]}（修炼加成 ×${ROOT_MULT[player.root]}）`, "orange");
    log(`体质：${player.physique}`, "gold");
    log(`元素：${player.elements.join("·") || "无"}`, "purple");

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

    // 显示下一个突破丹需求
    const nextPill = getBreakthroughPill(rs.realmIndex + 1);
    log(`🧪 下一个大境界突破丹：${nextPill}`, "orange");
    log(`━━━━━━━━━━━━━━━━━━━━`, "gold");
}

// ============ 聊天指令分流 ============
function handleChat(cmd) {
    if (!cmd) return;

    if (cmd.startsWith("改名 ")) {
        if (typeof changeName === "function") changeName(cmd.substring(3).trim());
        return;
    }

    if (cmd === "修为划分" || cmd === "体质划分" || cmd === "灵根划分" || cmd === "元素划分"
        || cmd === "查看详情" || cmd === "状态" || cmd === "坊市" || cmd === "帮助"
        || cmd.startsWith("买 ") || cmd.startsWith("用 ") || cmd.startsWith("炼 ")
        || cmd === "炼丹炉" || cmd === "存档" || cmd === "save" || cmd === "help") {
        handleLocalCommand(cmd);
        return;
    }

    if (typeof sendChat === "function") sendChat(cmd);
}

// ============ 本地指令 ============
function handleLocalCommand(cmd) {
    if (cmd === "修为划分") {
        log("✨ 正道：" + REALMS.join(" → "), "gold");
        return;
    }
    if (cmd === "体质划分") {
        PHYSIQUES.forEach(p => log(`${p.name} | 修炼 +${p.cultivateBonus} | 丹药 +${p.pillBonus} | 稀有度 ${p.rarity}`, "cyan"));
        return;
    }
    if (cmd === "灵根划分") {
        ROOTS.forEach((r, i) => log(`${i}. ${r} | 修炼加成 ×${ROOT_MULT[i]}`, "orange"));
        return;
    }
    if (cmd === "元素划分") {
        ELEMENTS.forEach(e => log(`元素：${e}`, "purple"));
        return;
    }
    if (cmd === "查看详情" || cmd === "状态") { showStatus(); return; }
    if (cmd === "坊市") { shop(); return; }
    if (cmd === "炼丹炉") { alchemy(); return; }
    if (cmd.startsWith("买 ")) { buyPill(cmd.substring(2).trim()); return; }
    if (cmd.startsWith("用 ")) { usePill(cmd.substring(2).trim()); return; }
    if (cmd.startsWith("炼 ")) { craftPill(cmd.substring(2).trim()); return; }
    if (cmd === "存档" || cmd === "save") { saveGame(); return; }
    if (cmd === "帮助" || cmd === "help") {
        log("📖 按钮：修炼 / 打怪 / 历练 / 突破 / 法则 / 坊市 / 炼丹炉 / 详情 / 存档 / 重置", "cyan");
        log("💬 指令：买 丹药名 / 用 丹药名 / 炼 丹药名 / 改名 新名字", "cyan");
        log("💬 其他输入会作为聊天消息发给所有在线玩家", "cyan");
        return;
    }
}

// ============ 按钮 ============
document.getElementById("actions").addEventListener("click", e => {
    const btn = e.target.closest("button");
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
    else if (action === "status") showStatus();
    else if (action === "save") saveGame();
    else if (action === "reset") {
        if (confirm("确定要重新开始吗？当前存档会被清空！")) {
            localStorage.removeItem(SAVE_KEY);
            location.reload();
        }
    }
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

// ============ 启动 ============
function start() {
    const saved = loadGame();
    if (saved) {
        player = saved;
        log("💾 读取存档成功！", "lime");
    } else {
        player = defaultPlayer();
        log(`🌌 你觉醒了【${ROOTS[player.root]}】，体质【${player.physique}】，元素【${player.elements.join("·")}】。`, "cyan");
        log("点击下方按钮开始你的修仙之路。输入「帮助」查看指令。", "gray");
    }
    chatLog("✨ 太初烬寰修仙系统已启动 ✨", "sys");
    chatLog("💡 输入「帮助」查看所有指令", "sys");
    refreshUI();
}

if (typeof firebase !== "undefined") {
    setTimeout(start, 200);
} else {
    start();
}
