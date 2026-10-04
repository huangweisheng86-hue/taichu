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
    const time = new Date(msg.time).toLocaleTimeString("zh-CN", {hour: "2-digit", minute: "2-digit"});
    const prefix = msg.isSys ? "" : `[${time}] `;
    const text = `${prefix}${msg.name}：${msg.text}`;
    if (typeof chatLog === "function") {
        chatLog(text, msg.isSys ? "sys" : (msg.name === playerName ? "me" : "broadcast"));
    }
});

function sendChat(text) {
    if (!text || !text.trim()) return;
    chatRef.push({
        name: playerName,
        text: text.trim(),
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

// ============ 在线人数 ============
const onlineRef = db.ref("online/" + playerId);
onlineRef.set({name: playerName, time: firebase.database.ServerValue.TIMESTAMP});
onlineRef.onDisconnect().remove();

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
    if (typeof chatLog === "function") chatLog(`✅ 改名为「${newName}」`, "sys");
}
