// ============ 数据定义（摘自原代码） ============
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

// ============ 玩家数据 ============
const player = {
    power: 0,          // 修为，可为负（魔道）
    realmIndex: 0,
    stageIndex: 0,
    mana: 100,
    maxMana: 100,
    lawPower: 0,
    root: 2,           // 普通灵根
    elements: [],
    physique: "凡体",
    lawElements: {},
    items: {},         // 背包：{物品名: 数量}
    age: 16,
    life: 80
};

// ============ 工具函数 ============
function needForStage(r, s) {
    return 10 + r * 3000 + s * 50;
}

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

function getPhysiqueData(name) {
    return PHYSIQUES.find(p => p.name === name);
}

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

// ============ 初始化 ============
function initGame() {
    // 随机灵根
    const r = Math.random();
    if (r < 0.1) player.root = 0;
    else if (r < 0.4) player.root = 1;
    else if (r < 0.7) player.root = 2;
    else if (r < 0.9) player.root = 3;
    else if (r < 0.98) player.root = 4;
    else player.root = 16;

    player.elements = generateRandomElements();
    player.physique = generateRandomPhysique();

    for (const e of ELEMENTS) player.lawElements[e] = {exp: 0, level: 0};

    log(`🌌 你觉醒了【${ROOTS[player.root]}】，体质【${player.physique}】，元素【${player.elements.join("·")}】。`, "cyan");
    log("点击下方按钮开始你的修仙之路。", "gray");
    refreshUI();
}

// ============ 日志 ============
function log(text, color = "gray") {
    const logEl = document.getElementById("log");
    const line = document.createElement("div");
    line.className = "line " + color;
    line.textContent = text;
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
    // 只保留最近 100 条
    while (logEl.children.length > 100) logEl.removeChild(logEl.firstChild);
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

    // 进度条
    const need = needForStage(rs.realmIndex, rs.stageIndex);
    const percent = Math.min(100, (absQ / (absQ + rs.needForNext)) * 100);
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = `距离下一阶段还需 ${rs.needForNext.toLocaleString()} 修为`;
}

// ============ 修炼 ============
function cultivate(isMo) {
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
        // 有几率被魔气侵蚀
        if (Math.random() < 0.6 / mult) {
            const moGain = Math.floor(Math.random() * 2 * mult) + 1;
            player.power -= moGain;
            log(`😈 受到 ${moGain} 魔气侵蚀！`, "red");
        }
    }

    // 恢复灵力
    player.mana = Math.min(player.maxMana, player.mana + 5);

    checkBreakthrough();
    refreshUI();
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
        log(`⭐ 天降奇缘！你获得仙人传承，修为 +1000，法则能量 +10，灵力全满！`, "gold");
    }
    checkBreakthrough();
    refreshUI();
}

// ============ 突破 ============
function breakthrough() {
    const absQ = player.power >= 0 ? player.power : -player.power;
    const realmList = player.power >= 0 ? REALMS : EVIL_REALMS;
    const rs = calcRealmStage(absQ);
    if (rs.needForNext <= 0) {
        log("❌ 已至当前境界巅峰，无法继续突破。", "red");
        return;
    }
    // 突破一下
    const gain = rs.needForNext;
    player.power += player.power >= 0 ? gain : -gain;
    log(`⚡ 强行突破，修为 +${gain}！`, "orange");
    checkBreakthrough();
    refreshUI();
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
                if (sign === "good") log(`✨ 你顿悟正道，重返 ${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}！`, "gold");
                else log(`🌑 你堕入魔道，化身 ${realmList[rs.realmIndex]}·${STAGES[rs.stageIndex]}！`, "purple");
            } else if (rs.realmIndex > oldRi) {
                log(`🔥🔥🔥 突破大境界！进入【${realmList[rs.realmIndex]}】！`, "gold");
                showFlash();
            } else if (rs.stageIndex > oldSi) {
                log(`💠 突破小境界，进入【${STAGES[rs.stageIndex]}】。`, "cyan");
            }
        }

        player.realmIndex = rs.realmIndex;
        player.stageIndex = rs.stageIndex;
        // 更新灵力上限
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
    const actualExp = 1;
    const elements = player.elements;
    if (elements.length === 0) {
        log("❌ 你没有任何元素！", "red");
        return;
    }
    const e = elements[Math.floor(Math.random() * elements.length)];
    const data = player.lawElements[e] || {exp: 0, level: 0};
    data.exp += actualExp;
    const nextExp = Math.pow(10, data.level + 1);
    if (data.level < 5 && data.exp >= nextExp) {
        data.exp -= nextExp;
        data.level++;
        log(`✨ ${e}之法则突破至【${getElementLevelName(data.level)}】！`, "gold");
    }
    player.lawElements[e] = data;
    log(`🔮 消耗 1 法则能量，${e}之法则经验 +${actualExp}。`, "cyan");
    refreshUI();
}

function getElementLevelName(level) {
    return ["一窍不通","初窥门径","小有所成","登堂入室","炉火纯青","登峰造极"][level] || "未知";
}

// ============ 坊市 ============
function shop() {
    const items = [
        {name:"初级修为丹", cost:10, desc:"+100 修为"},
        {name:"中级修为丹", cost:100, desc:"+1000 修为"},
        {name:"高级修为丹", cost:1000, desc:"+10000 修为"}
    ];
    log("🏪 你进入了坊市：", "gold");
    items.forEach(i => log(`  ${i.name} - ${i.cost} 法则能量（${i.desc}）`, "gray"));
    log("（点击「使用法则能量」攒能量，暂时不支持购买）", "gray");
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
    log(`━━━━━━━━━━━━━━━━━━━━`, "gold");

    // 元素法则
    log("🔮 元素法则：", "cyan");
    for (const e of player.elements) {
        const d = player.lawElements[e] || {exp: 0, level: 0};
        log(`  ${e}：${d.exp} 经验 | ${getElementLevelName(d.level)}`, "gray");
    }
}

// ============ 绑定按钮 ============
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
});

// ============ 启动 ============
initGame();
