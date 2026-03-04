const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// ============================================
// CHANNEL CONFIGURATION - BADILI HAPA!!!
// ============================================
const CHANNEL_JID = "120363353854480831@newsletter"; // 🔴 WEKA CHANNEL JID YAKO HAPA!
const CHANNEL_NAME = "RAHMANI MD UPDATES"; // 🔴 JINA LA CHANNEL YAKO
const CHANNEL_DESC = "📢 Get latest updates, new commands & AI features"; // MAELEZO

// ============================================
// COMMANDES DATABASE
// ============================================
const commandDescriptions = {
    // AI & IMAGINATION
    "fal": "🎨 *AI Image Generator* (Fast SDXL)",
    "faljava": "☕ *Java Client AI* (v0.7.1)",
    "blacklab": "🐕 *Black Lab Special*",
    "imagine": "✨ *Créer n'importe quelle image*",
    "remix": "🔄 *Remixer une image existante*",
    "falstatus": "📊 *Vérifier statut API*",
    "falmodel": "🤖 *Choisir modèle AI*",
    
    // APK DOWNLOADER
    "apk": "📱 *Chercher & télécharger APK*",
    "apkdownload": "⬇️ *Télécharger par App ID*",
    "searchapp": "🔍 *Rechercher sur PlayStore*",
    
    // MEDIA DOWNLOADER
    "yt": "▶️ *YouTube Video/Audio*",
    "ytmp3": "🎵 *YouTube to MP3*",
    "tiktok": "📱 *TikTok sans watermark*",
    "instagram": "📸 *Instagram Reels/Photo*",
    "facebook": "📘 *Facebook Vidéo*",
    "twitter": "🐦 *Twitter/X Vidéo*",
    
    // UTILITIES
    "sticker": "🎭 *Créer sticker*",
    "toimage": "🖼️ *Sticker to image*",
    "qr": "📊 *Générer QR code*",
    "shorturl": "🔗 *Raccourcir lien*",
    "weather": "🌤️ *Météo*",
    "translate": "🌍 *Traducteur*",
    
    // GROUP TOOLS
    "tagall": "🏷️ *Mentionner tous*",
    "hidetag": "🔇 *Tag caché*",
    "groupinfo": "ℹ️ *Infos groupe*",
    "poll": "📊 *Créer sondage*",
    "kick": "👢 *Expulser membre*",
    "promote": "⭐ *Promouvoir admin*",
    "demote": "📉 *Rétrograder admin*",
    
    // OWNER
    "broadcast": "📢 *Message à tous*",
    "setpp": "🖼️ *Changer photo bot*",
    "setname": "📝 *Changer nom bot*",
    "eval": "💻 *Exécuter code*",
    "restart": "🔄 *Redémarrer bot*",
    "update": "⚡ *Mise à jour*",
    
    // CHANNEL
    "channel": "📢 *Voir ma chaîne WhatsApp*"
};

zokou({ nomCom: "menu3", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    // Organiser les commandes par catégorie
    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Système info
    const totalRam = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeRam = (os.freemem() / (1024 ** 3)).toFixed(2);
    const usedRam = (totalRam - freeRam).toFixed(2);
    const uptime = os.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const cpuModel = os.cpus()[0].model;

    // ============= HEADER PREMIUM AVEC CHANNEL =============
    let infoMsg = `
╔══════════════════════════╗
║     ✦ *${s.BOT}* ✦     ║
║  _Bot WhatsApp Premium_   ║
╚══════════════════════════╝

╭━──━─━─━─━─━─━─━─━─━─━╮
┃  ✦ *INFORMATIONS BOT* ✦
┃
┃ 👑 *Owner* : ${s.OWNER_NAME}
┃ 🔰 *Préfixe* : 「 ${s.PREFIXE} 」
┃ 📊 *Mode* : ${mode === "public" ? "🌍 Public" : "🔒 Privé"}
┃
┃ ⏰ *Date* : ${date}
┃ ⌚ *Heure* : ${temps}
┃ 📡 *Uptime* : ${hours}h ${minutes}m
┃
┃ 💻 *RAM* : ${usedRam}GB / ${totalRam}GB
┃ 🔧 *CPU* : ${os.cpus().length} Cores
┃ 📱 *Platform* : ${os.platform()}
┃
┃ ✨ *Commands* : ${cm.length} disponibles
┃ 🚀 *Version* : 2.0.0
┃
╰━──━─━─━─━─━─━─━─━─━─━╯

╔══════════════════════════╗
║  📢 *MA CHAÎNE WHATSAPP*  ║
╚══════════════════════════╝
┃ 📌 *Nom* : ${CHANNEL_NAME}
┃ 📋 *Info* : ${CHANNEL_DESC}
┃ 👇 *Cliquez ci-dessous pour suivre*
┃
┃ ✦ *Tapez .channel* pour ouvrir
┃ ✦ *Ou cliquez sur le bouton*
┃
${readmore}`;

    // ============= CATEGORIES =============
    let menuMsg = `
╔══════════════════════════╗
║    📋 *MENU COMMANDES*   ║
╚══════════════════════════╝

`;

    // Regrouper les commandes par catégorie réelle du bot
    const categoryMap = {};
    
    for (const cat in coms) {
        if (!categoryMap[cat]) {
            categoryMap[cat] = [];
        }
        
        for (const cmd of coms[cat]) {
            categoryMap[cat].push(cmd);
        }
    }

    // Afficher chaque catégorie avec design premium
    for (const [catName, commands] of Object.entries(categoryMap)) {
        // Emoji par défaut selon la catégorie
        let catEmoji = "📌";
        if (catName.toLowerCase().includes("ai")) catEmoji = "🤖";
        else if (catName.toLowerCase().includes("download")) catEmoji = "📥";
        else if (catName.toLowerCase().includes("general")) catEmoji = "⚙️";
        else if (catName.toLowerCase().includes("group")) catEmoji = "👥";
        else if (catName.toLowerCase().includes("owner")) catEmoji = "👑";
        else if (catName.toLowerCase().includes("search")) catEmoji = "🔍";
        
        menuMsg += `┏━━━❖━─━─━─━─━─━❖━━━┓
┃   ${catEmoji} *${catName}* ${catEmoji}
┗━━━❖━─━─━─━─━─━❖━━━┛
`;

        // Trier les commandes alphabétiquement
        const sortedCmds = commands.sort();
        
        for (const cmd of sortedCmds) {
            const desc = commandDescriptions[cmd] || "⚡ Commande disponible";
            menuMsg += `┃ ✦ *${s.PREFIXE}${cmd}*\n`;
            menuMsg += `┃   ↳ ${desc}\n`;
        }
        
        menuMsg += `┃\n`;
    }

    // Footer avec channel
    menuMsg += `
╔══════════════════════════╗
║  ✦ *${s.BOT} - Premium Bot* ✦
║
║  📌 *Total Commandes:* ${cm.length}
║  ⚡ *Statut:* 🟢 En ligne
║  💎 *Créé par:* ${s.OWNER_NAME}
║
║  📢 *Rejoins ma chaîne:*
║  ${CHANNEL_NAME}
║  ✦ Tape .channel pour voir
║
║  _Tape .help [commande]_
║  _pour plus de détails_
╚══════════════════════════╝

> *${s.BOT}* est prêt à vous servir ! ✨
`;

    // ============= ENVOI DU MENU AVEC BOUTON CHANNEL =============
    var lien = mybotpic();
    
    // Créer le bouton pour le channel
    const channelButton = {
        button: [
            {
                type: "url",
                text: "📢 SUIVRE MA CHAÎNE",
                url: `https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}`
            }
        ]
    };
    
    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            await zk.sendMessage(dest, { 
                video: { url: lien }, 
                caption: infoMsg + menuMsg, 
                footer: `✨ ${s.BOT} - Bot WhatsApp Premium ✨`,
                buttons: channelButton.button,
                gifPlayback: true,
                viewOnce: true
            }, { quoted: ms });
        } catch (e) {
            console.log("Menu error: " + e);
            repondre(infoMsg + menuMsg);
        }
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            await zk.sendMessage(dest, { 
                image: { url: lien }, 
                caption: infoMsg + menuMsg,
                footer: `✨ ${s.BOT} - Bot WhatsApp Premium ✨`,
                buttons: channelButton.button,
                viewOnce: true
            }, { quoted: ms });
        } catch (e) {
            console.log("Menu error: " + e);
            repondre(infoMsg + menuMsg);
        }
    } else {
        // Si pas d'image, envoyer avec bouton séparé
        await repondre(infoMsg + menuMsg);
        await zk.sendMessage(dest, {
            text: `📢 *Clique pour suivre ma chaîne:*\n${CHANNEL_NAME}`,
            buttons: channelButton.button
        }, { quoted: ms });
    }
});

// ============= COMMAND POUR VOIR LE CHANNEL =============
zokou({ nomCom: "channel", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre } = commandeOptions;
    
    try {
        // Essayer d'envoyer l'invitation au channel
        await zk.newsletterMetadata(dest, CHANNEL_JID);
        
        const channelMsg = `
╔══════════════════════════╗
║     📢 *MA CHAÎNE WhatsApp*    ║
╚══════════════════════════╝

┃ 📌 *Nom* : ${CHANNEL_NAME}
┃ 📋 *Description* : ${CHANNEL_DESC}
┃ 👥 *Membres* : Rejoins maintenant!
┃
┃ 🔗 *Lien* : 
┃ https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}
┃
┃ ✨ *Avantages:*
┃ • Dernières commandes
┃ • Mises à jour du bot
┃ • Astuces et tutoriels
┃ • Nouveautés AI
┃
┃ 👇 *Clique sur le bouton ci-dessous*
┃    pour suivre la chaîne!
┃
┃ _Tape .menu pour voir les commandes_
╚══════════════════════════╝
`;

        const channelButton = {
            button: [
                {
                    type: "url",
                    text: "📢 SUIVRE MA CHAÎNE",
                    url: `https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}`
                },
                {
                    type: "url",
                    text: "🔗 OUVRIR LE LIEN",
                    url: `https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}`
                }
            ]
        };

        await zk.sendMessage(dest, {
            text: channelMsg,
            buttons: channelButton.button,
            footer: `✨ ${s.BOT} - Rejoins ma chaîne! ✨`
        }, { quoted: ms });

    } catch (error) {
        console.error("Channel error:", error);
        
        // Fallback si newsletterMetadata ne fonctionne pas
        const fallbackMsg = `
📢 *MA CHAÎNE WHATSAPP*

📌 *Nom* : ${CHANNEL_NAME}
📋 *Description* : ${CHANNEL_DESC}

🔗 *Lien direct*:
https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}

👉 *Clique sur le lien pour suivre!*

✨ *Pourquoi suivre?*
• Mises à jour du bot
• Nouvelles commandes
• Support prioritaire
• Astuces exclusives

_Tape .menu pour les commandes_
`;

        await repondre(fallbackMsg);
        
        // Essayer d'envoyer le lien séparément
        await zk.sendMessage(dest, {
            text: `🔗 *Lien de la chaîne:*\nhttps://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}`,
            buttons: [{
                type: "url",
                text: "📢 SUIVRE LA CHAÎNE",
                url: `https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}`
            }]
        }, { quoted: ms });
    }
});

// ============= MENU AI =============
zokou({ nomCom: "aimenu", categorie: "AI" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, mybotpic } = commandeOptions;
    
    const aiMenu = `
╔══════════════════════════╗
║   🤖 *MENU INTELLIGENCE ARTIFICIELLE*   ║
╚══════════════════════════╝

┏━━━❖━─━─━─━─━❖━━━┓
┃  🎨 *GÉNÉRATION D'IMAGES*
┗━━━❖━─━─━─━─━❖━━━┛

┃ ✦ *${s.PREFIXE}fal* [prompt]
┃   ↳ Générer image avec Fast SDXL
┃
┃ ✦ *${s.PREFIXE}faljava* [prompt]
┃   ↳ Générer avec Java Client v0.7.1
┃
┃ ✦ *${s.PREFIXE}blacklab*
┃   ↳ Image spéciale: chien noir qui nage
┃
┃ ✦ *${s.PREFIXE}imagine* [prompt]
┃   ↳ Créer n'importe quelle image
┃
┃ ✦ *${s.PREFIXE}remix* [variation]
┃   ↳ Remixer une image (reply)

┏━━━❖━─━─━─━─━❖━━━┓
┃  ⚙️ *CONFIGURATION*
┗━━━❖━─━─━─━─━❖━━━┛

┃ ✦ *${s.PREFIXE}falmodel* [model] [prompt]
┃   ↳ Choisir modèle: sdxl, sd3, glm, flux
┃
┃ ✦ *${s.PREFIXE}falstatus*
┃   ↳ Vérifier statut API et crédits

━━━━━━━━━━━━━━━━━━
💡 *Exemples:*
▸ ${s.PREFIXE}fal a cute puppy
▸ ${s.PREFIXE}falmodel flux beautiful sunset
▸ ${s.PREFIXE}blacklab

📢 *Rejoins ma chaîne:* .channel
✨ *${s.BOT} - AI Powered by fal.ai v0.7.1*
`;
    
    var lien = mybotpic();
    
    if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        await zk.sendMessage(dest, { 
            image: { url: lien }, 
            caption: aiMenu,
            footer: `🎨 ${s.BOT} AI Generator`
        }, { quoted: ms });
    } else {
        repondre(aiMenu);
    }
});

// ============= MENU APK =============
zokou({ nomCom: "apkmenu", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, mybotpic } = commandeOptions;
    
    const apkMenu = `
╔══════════════════════════╗
║   📱 *MENU TÉLÉCHARGEMENT APK*   ║
╚══════════════════════════╝

┏━━━❖━─━─━─━─━❖━━━┓
┃  🔍 *RECHERCHE & TÉLÉCHARGEMENT*
┗━━━❖━─━─━─━─━❖━━━┛

┃ ✦ *${s.PREFIXE}apk* [nom app]
┃   ↳ Chercher et télécharger une app
┃   📌 Ex: ${s.PREFIXE}apk whatsapp
┃
┃ ✦ *${s.PREFIXE}apkdownload* [app ID]
┃   ↳ Télécharger direct par ID
┃   📌 Ex: ${s.PREFIXE}apkdownload com.whatsapp
┃
┃ ✦ *${s.PREFIXE}searchapp* [nom]
┃   ↳ Rechercher apps sur PlayStore
┃   📌 Ex: ${s.PREFIXE}searchapp instagram

━━━━━━━━━━━━━━━━━━
💡 *Comment trouver l'App ID?*
Utilise ${s.PREFIXE}searchapp [nom]
puis copie l'ID (ex: com.whatsapp)

📢 *Rejoins ma chaîne:* .channel
📥 *${s.BOT} - APK Downloader*
`;
    
    var lien = mybotpic();
    
    if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        await zk.sendMessage(dest, { 
            image: { url: lien }, 
            caption: apkMenu,
            footer: `📲 ${s.BOT} APK Downloader`
        }, { quoted: ms });
    } else {
        repondre(apkMenu);
    }
});

// Commande pour vérifier le JID du channel (utile pour debug)
zokou({ nomCom: "channeljid", categorie: "Owner" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre } = commandeOptions;
    
    const jidInfo = `
📢 *CHANNEL JID INFORMATION*

🔑 *JID Actuel* : ${CHANNEL_JID}
📌 *Nom* : ${CHANNEL_NAME}
📋 *Description* : ${CHANNEL_DESC}

🔗 *Lien* : 
https://whatsapp.com/channel/${CHANNEL_JID.replace('@newsletter', '')}

✅ *Statut*: ${CHANNEL_JID ? "Configuré" : "Non configuré"}

_Pour changer le JID, modifie CHANNEL_JID dans le code_
`;
    
    repondre(jidInfo);
});

module.exports = {
    commandDescriptions,
    CHANNEL_JID,
    CHANNEL_NAME
};
