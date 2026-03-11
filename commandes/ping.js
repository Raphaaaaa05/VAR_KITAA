const { zokou } = require("../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");
const conf = require("../set");

zokou({
    nomCom: "ping",
    categorie: "General",
    reaction: "📍",
    desc: "Check bot response time and system status"
}, async (dest, zk, commandeOptions) => {
    const { repondre, ms } = commandeOptions;
    
    const start = Date.now();
    
    // Send initial ping
    await repondre("📍 *VAR KITAA is pinging...*");
    
    const end = Date.now();
    const responseTime = end - start;
    
    // Get system information
    const uptime = process.uptime();
    const days = Math.floor(uptime / (3600 * 24));
    const hours = Math.floor((uptime % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    const memoryUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const memoryTotal = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const memoryFree = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    
    const platform = os.platform();
    const arch = os.arch();
    const hostname = os.hostname();
    const cpus = os.cpus().length;
    const cpuModel = os.cpus()[0]?.model || "Unknown";
    
    const nodeVersion = process.version;
    
    // Calculate speed emoji
    let speedEmoji = "🐢";
    let speedStatus = "SLOW";
    if (responseTime < 200) {
        speedEmoji = "🚀";
        speedStatus = "FAST";
    } else if (responseTime < 500) {
        speedEmoji = "⚡";
        speedStatus = "GOOD";
    } else if (responseTime < 1000) {
        speedEmoji = "🐢";
        speedStatus = "SLOW";
    } else {
        speedEmoji = "🐌";
        speedStatus = "VERY SLOW";
    }
    
    // Create ping message
    const pingMessage = `╭━━━━ *『 𝐕𝐀𝐑 𝐊𝐈𝐓𝐀𝐀 』* ━━━╮
┃
┃ ${speedEmoji} *RESPONSE TIME*
┃ └─ ${responseTime}ms (${speedStatus})
┃
┃ ⚡ *SYSTEM INFO*
┃ ├─ 💻 OS: ${platform} ${arch}
┃ ├─ 🖥️ Host: ${hostname.substring(0, 15)}
┃ ├─ 🧠 CPU: ${cpus}x Core
┃ ├─ 🔧 Model: ${cpuModel.substring(0, 25)}...
┃ ├─ 💾 RAM Used: ${memoryUsed}MB
┃ ├─ 💿 RAM Free: ${memoryFree}GB / ${memoryTotal}GB
┃ └─ ⏱️ Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s
┃
┃ 🤖 *BOT INFO*
┃ ├─ 📦 Name: VAR KITAA BOT
┃ ├─ 🔰 Node: ${nodeVersion}
┃ ├─ 🟢 Status: ONLINE
┃ └─ 📍 Ping: ${responseTime}ms
┃
┃ 📢 *JOIN CHANNEL*
┃ 🔗 https://whatsapp.com/channel/0029VasLXWp4tRs0xU9MDc47
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
_Powered by VAR KITAA_`;

    await repondre(pingMessage);
});
