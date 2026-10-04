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

// ============ 丹药表 ============
const PILLS = {
    "初级修为丹": {price: 10, effect: {power: 100}, desc: "+100 修为"},
    "中级修为丹": {price: 100, effect: {power: 1000}, desc: "+1000 修为"},
    "高级修为丹": {price: 1000, effect: {power: 10000}, desc: "+10000 修为"},
    "极品修为丹": {price: 5000, effect: {power: 100000}, desc: "+10万 修为"},
    "仙品修为丹": {price: 20000, effect: {power: 1000000}, desc: "+100万 修为"},
    "洗髓丹": {price: 500, effect: {refineRoot: true}, desc: "随机改变灵根"},
    "天地元素丹": {price: 800, effect: {refineElements: true}, desc: "重铸元素"}
};

// ============ 玩家数据 ============
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
        power: 0,
        realmIndex: 0,
        stageIndex: 0,
        mana: 100,
        maxMana: 100,
        lawPower: 50,      // 初始给 50 好买丹药
        root: root,
        elements: generateRandomElements(),
        physique: generateRandomPhysique(),
        lawElements: lawElements,
        items: {},         // 背包：{丹药名: 数量}
        age: 16,
        life: 80,
        lastCultivate: 0   // 冷却时间戳
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

// ============ 备份存档 ============
const SAVE_KEY = "taichu_xiuxian_save_v1";

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
        // 兼容性补全
        if (!p.lawElements) p.lawElements = {};
        for (const e of ELEMENTS) {
            if (!p.lawElements[e]) p.lawElements[e] = {exp: 0, level: 0};
        }
        if (!p.items) p.items = {};
        if (p.lastCultivate === undefined) p.lastCultivate = 0;
        return p;
    } catch (e) {
        return null;
    }
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

// 聊天区日志
function chatLog(text, cls = "sys") {
    const el = document.getElementById("chat-log");
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
    document.getElementById("stat-mana").textContent = `${player.mana}/${player.maxMana}`;
    document.getElementById("stat-law").textContent = player.lawPower;
    document.getElementById("stat-root").textContent = ROOTS[player.root];
    document.getElementById("stat-physique").textContent = player.physique;
    document.getElementById("stat-elements").textContent = player.elements.join("·") || "无";

    const need = needForStage(rs.realmIndex, rs.stageIndex);
    const percent = Math.min(100, (absQ / (absQ + rs.needForNext)) * 100);
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = `距离下一阶段还需 ${rs.needForNext.toLocaleString()} 修为`;

    // 修炼冷却按钮状态
    updateCooldownButton();
}

// ============ 修炼冷却 ============
const CULTIVATE_CD = 3000; // 3 秒冷却

function updateCooldownButton() {
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
    saveGame(true); // 静默自动存档
}

// ============ 历练 ============
function adventure() {
    const roll = Math.random();
    if (roll < 0.15) {
        player.mana = Math.max(0, player.mana - 20);
        log(`🗡 你遇到妖兽袭击，灵力 -20！`, "red");
    } else if (roll < 0.35) {
        log(`🍃 你游历一番，一无所获。`, "gray");
    } else if (roll < 0.75) {
        const gain = Math.floor(Math.random() * 100) + 20;
        player.power += gain;
        log(`💎 你发现一处灵矿，修为 +${gain}。`, "cyan");
    } else if (roll < 0.95) {
        const gain = Math.floor(Math.random() * 300) + 100;
        player.power += gain;
        log(`🌟 你误入灵脉之地，修为 +${gain}！`, "gold");
    } else {
        player.power += 1000;
        player.lawPower += 10;
        player.mana = player.maxMana;
        log(`⭐ 天降奇缘！修为 +1000，法则能量 +10，灵力全满！`, "gold");
    }
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 突破 ============
function breakthrough() {
    const absQ = player.power >= 0 ? player.power : -player.power;
    const rs = calcRealmStage(absQ);
    if (rs.needForNext <= 0) {
        log("❌ 已至当前境界巅峰，无法继续突破。", "red");
        return;
    }
    const gain = rs.needForNext;
    player.power += player.power >= 0 ? gain : -gain;
    log(`⚡ 强行突破，修为 +${gain}！`, "orange");
    checkBreakthrough();
    refreshUI();
    saveGame(true);
}

// ============ 检查突破 ============
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
                    chatLog(`✨ 你顿悟正道，重返 ${realmList[rs.realmIndex]}`, "broadcast");
                } else {
                    log(`🌑 你堕入魔道，化身 ${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}！`, "purple");
                    chatLog(`🌑 你堕入魔道，化身 ${realmList[rs.realmIndex]}`, "broadcast");
                }
            } else if (rs.realmIndex > oldRi) {
                log(`🔥🔥🔥 突破大境界！进入【${realmList[rs.realmIndex]}】！`, "gold");
                chatLog(`🔥 突破大境界！进入【${realmList[rs.realmIndex]}】`, "broadcast");
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

// ============ 使用法则能量 ============
function useLawPower() {
    if (player.lawPower < 1) {
        log("❌ 法则能量不足！", "red");
        return;
    }
    player.lawPower -= 1;
    const elements = player.elements;
    if (elements.length === 0) {
        log("❌ 你没有任何元素！", "red");
        return;
    }
    const e = elements[Math.floor(Math.random() * elements.length)];
    const data = player.lawElements[e] || {exp: 0, level: 0};
    data.exp += 1;
    const nextExp = Math.pow(10, data.level + 1);
    if (data.level < 5 && data.exp >= nextExp) {
        data.exp -= nextExp;
        data.level++;
        log(`✨ ${e}之法则突破至【${getElementLevelName(data.level)}】！`, "gold");
        chatLog(`✨ ${e}之法则突破至【${getElementLevelName(data.level)}】`, "broadcast");
    }
    player.lawElements[e] = data;
    log(`🔮 消耗 1 法则能量，${e}之法则经验 +1。`, "cyan");
    refreshUI();
    saveGame(true);
}

function getElementLevelName(level) {
    return ["一窍不通","初窥门径","小有所成","登堂入室","炉火纯青","登峰造极"][level] || "未知";
}

// ============ 坊市 + 丹药 ============
function shop() {
    const items = Object.entries(PILLS);
    log("🏪 坊市：", "gold");
    items.forEach(([name, info], idx) => {
        const owned = player.items[name] || 0;
        log(`  [${idx+1}] ${name} - ${info.price} 法则能量（${info.desc}）持有 ${owned}`, "gray");
    });
    log("💡 在下方聊天框输入「买 丹药名」或「用 丹药名」", "orange");
    chatLog("🏪 你进入坊市，可用指令：买 初级修为丹 / 用 初级修为丹", "sys");
}

function buyPill(name) {
    const pill = PILLS[name];
    if (!pill) {
        log(`❌ 没有这种丹药：${name}`, "red");
        return;
    }
    if (player.lawPower < pill.price) {
        log(`❌ 法则能量不足，需要 ${pill.price}，当前 ${player.lawPower}`, "red");
        return;
    }
    player.lawPower -= pill.price;
    player.items[name] = (player.items[name] || 0) + 1;
    log(`🛒 你购买了【${name}】，剩余法则能量 ${player.lawPower}。`, "lime");
    chatLog(`🛒 购买【${name}】`, "me");
    refreshUI();
    saveGame(true);
}

function usePill(name) {
    if (!player.items[name] || player.items[name] <= 0) {
        log(`❌ 你没有【${name}】`, "red");
        return;
    }
    const pill = PILLS[name];
    if (!pill) {
        log(`❌ 未知丹药：${name}`, "red");
        return;
    }
    player.items[name]--;
    if (player.items[name] <= 0) delete player.items[name];

    if (pill.effect.power) {
        player.power += pill.effect.power;
        log(`✨ 服用【${name}】，修为 +${pill.effect.power}！`, "gold");
    }
    if (pill.effect.refineRoot) {
        const old = player.root;
        const rand = Math.random();
        let newRoot;
        if (rand < 0.3) newRoot = old;
        else if (rand < 0.5) newRoot = Math.max(0, old - 1);
        else newRoot = Math.min(ROOTS.length - 1, old + 1);
        if (newRoot === old) {
            log(`🍃 服用洗髓丹，但灵根未变，仍是 ${ROOTS[old]}`, "orange");
        } else {
            player.root = newRoot;
            log(`✨ 洗髓成功！灵根由 ${ROOTS[old]} 变为 ${ROOTS[newRoot]}！`, "gold");
            chatLog(`✨ 洗髓成功！灵根升级为 ${ROOTS[newRoot]}`, "broadcast");
        }
    }
    if (pill.effect.refineElements) {
        const oldStr = player.elements.join("·");
        player.elements = generateRandomElements();
        const newLawElements = {};
        for (const e of ELEMENTS) newLawElements[e] = {exp: 0, level: 0};
        player.lawElements = newLawElements;
        log(`✨ 天地元素丹生效！元素由【${oldStr}】变为【${player.elements.join("·")}】，法则已重置。`, "purple");
    }
    checkBreakthrough();
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
    log(`灵力：${player.mana}/${player.maxMana}`, "cyan");
    log(`法则能量：${player.lawPower}`, "cyan");
    log(`灵根：${ROOTS[player.root]}（修炼加成 ×${ROOT_MULT[player.root]}）`, "orange");
    log(`体质：${player.physique}`, "gold");
    log(`元素：${player.elements.join("·") || "无"}`, "purple");

    // 丹药
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
    log(`━━━━━━━━━━━━━━━━━━━━`, "gold");
}

// ============ 聊天指令 ============
function handleChat(cmd) {
    if (!cmd) return;
    chatLog(`> ${cmd}`, "me");

    // 修为划分
    if (cmd === "修为划分") {
        const msg = "✨ 正道：" + REALMS.join(" → ") + "\n🌑 魔道：" + EVIL_REALMS.join(" → ") + "\n⚡ 阶段：" + STAGES.join(" → ");
        log(msg, "gold");
        chatLog("📜 已输出修为体系", "sys");
        return;
    }
    // 体质划分
    if (cmd === "体质划分") {
        PHYSIQUES.forEach(p => log(`${p.name} | 修炼 +${p.cultivateBonus} | 丹药 +${p.pillBonus} | 稀有度 ${p.rarity}`, "cyan"));
        chatLog("📜 已输出体质体系", "sys");
        return;
    }
    // 灵根划分
    if (cmd === "灵根划分") {
        ROOTS.forEach((r, i) => log(`${i}. ${r} | 修炼加成 ×${ROOT_MULT[i]}`, "orange"));
        chatLog("📜 已输出灵根体系", "sys");
        return;
    }
    // 元素划分
    if (cmd === "元素划分") {
        ELEMENTS.forEach(e => log(`元素：${e}`, "purple"));
        chatLog("📜 已输出元素体系", "sys");
        return;
    }
    // 查看详情
    if (cmd === "查看详情" || cmd === "状态") {
        showStatus();
        return;
    }
    // 坊市
    if (cmd === "坊市") {
        shop();
        return;
    }
    // 买 xxx
    if (cmd.startsWith("买 ")) {
        buyPill(cmd.substring(2).trim());
        return;
    }
    // 用 xxx
    if (cmd.startsWith("用 ")) {
        usePill(cmd.substring(2).trim());
        return;
    }
    // 存档
    if (cmd === "存档" || cmd === "save") {
        saveGame();
        return;
    }
    // 帮助
    if (cmd === "帮助" || cmd === "help") {
        log("📖 可用指令：修为划分 / 体质划分 / 灵根划分 / 元素划分 / 查看详情 / 坊市 / 买 丹药名 / 用 丹药名 / 存档", "cyan");
        return;
    }

    log(`💬 未知指令：${cmd}`, "gray");
}

// ============ 事件绑定 ============
document.getElementById("actions").addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "cultivate") cultivate(false);
    else if (action === "cultivate-mo") cultivate(true);
    else if (action === "adventure") adventure();
    else if (action === "breakthrough") breakthrough();
    else if (action === "use-law") useLawPower();
    else if (action === "shop") shop();
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

start();
