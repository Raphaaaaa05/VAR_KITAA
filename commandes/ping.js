const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");
moment.tz.setDefault('' + set.TZ);
zokou({
  'nomCom': "ping",
  'categorie': "General"
}, async (_0xbc4120, _0x1174cb, _0x3cdd90) => {
  let {
    ms: _0x1a542a
  } = _0x3cdd90;
  const {
    time: _0x5c9745,
    date: _0x2f4549
  } = {
    'time': moment().format("HH:mm:ss"),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x43b672 = Math.floor(Math.random() * 100) + 1;
  try {
    await _0x1174cb.sendMessage(_0xbc4120, {
      'audio': {
        'url': "https://files.catbox.moe/ke20t1.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'externalAdReply': {
          'title': "✧༺𝐕𝐀𝐑 𝐊𝐈𝐓𝐀𝐀༻✧",
          'body': "⚪ 𝚙𝚒𝚗𝚐: " + _0x43b672 + "ms\n📅 *Date:* " + _0x2f4549 + "\n⏰ *Time:* " + _0x5c9745,
          'thumbnailUrl': "https://files.catbox.moe/i4mkin.jpg",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
        }
      }
    }, {
      'quoted': _0x1a542a
    });
  } catch (_0x59d66e) {
    console.log("❌ Ping Command Error: " + _0x59d66e);
    repondre("❌ Error: " + _0x59d66e);
  }
});