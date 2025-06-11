(function (_0x453170, _0x99ccd4) {
  const _0x7493ed = _0x453170();
  while (true) {
    try {
      const _0x110ea5 = parseInt(_0x5052(886, 0xde)) / 1 * (-parseInt(_0x5052(1649, 0x778)) / 2) + -parseInt(_0x5052(2007, 0x7f5)) / 3 + -parseInt(_0x5052(1686, 0x813)) / 4 + parseInt(_0x5052(2333, 0x9c6)) / 5 * (-parseInt(_0x5052(2892, 0xe6a)) / 6) + parseInt(_0x5052(1340, 0xaa0)) / 7 + parseInt(_0x5052(1161, 0x78c)) / 8 + parseInt(_0x5052(2812, 0xd1e)) / 9;
      if (_0x110ea5 === _0x99ccd4) {
        break;
      } else {
        _0x7493ed.push(_0x7493ed.shift());
      }
    } catch (_0x10063b) {
      _0x7493ed.push(_0x7493ed.shift());
    }
  }
})(_0x1edb, 295629);
const _0x5eb60b = function () {
  let _0x27930f = true;
  return function (_0xf9823b, _0x4b2f0d) {
    const _0x272836 = _0x27930f ? function () {
      if (_0x4b2f0d) {
        const _0x139a3e = _0x4b2f0d.apply(_0xf9823b, arguments);
        _0x4b2f0d = null;
        return _0x139a3e;
      }
    } : function () {};
    _0x27930f = false;
    return _0x272836;
  };
}();
const _0x396724 = _0x5eb60b(this, function () {
  return _0x396724.toString().search("(((.+)+)+)+$").toString().constructor(_0x396724).search("(((.+)+)+)+$");
});
_0x396724();
const _0x228df6 = function () {
  let _0x456113 = true;
  return function (_0x2313b6, _0x22a042) {
    const _0x1c028f = _0x456113 ? function () {
      if (_0x22a042) {
        const _0x57f144 = _0x22a042.apply(_0x2313b6, arguments);
        _0x22a042 = null;
        return _0x57f144;
      }
    } : function () {};
    _0x456113 = false;
    return _0x1c028f;
  };
}();
(function () {
  _0x228df6(this, function () {
    const _0x3759d0 = new RegExp("function *\\( *\\)");
    const _0x59f4e4 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x2e6201 = _0x3fc47b("init");
    if (!_0x3759d0.test(_0x2e6201 + "chain") || !_0x59f4e4.test(_0x2e6201 + "input")) {
      _0x2e6201('0');
    } else {
      _0x3fc47b();
    }
  })();
})();
const _0x5f43d8 = function () {
  let _0x47c371 = true;
  return function (_0x4e4ad4, _0x62931b) {
    const _0x5f1462 = _0x47c371 ? function () {
      if (_0x62931b) {
        const _0x3943e2 = _0x62931b.apply(_0x4e4ad4, arguments);
        _0x62931b = null;
        return _0x3943e2;
      }
    } : function () {};
    _0x47c371 = false;
    return _0x5f1462;
  };
}();
const _0x370859 = _0x5f43d8(this, function () {
  const _0x4e2f5b = function () {
    let _0x714b80;
    try {
      _0x714b80 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3b0810) {
      _0x714b80 = window;
    }
    return _0x714b80;
  };
  const _0x5321af = _0x4e2f5b();
  const _0x1dc72e = _0x5321af.console = _0x5321af.console || {};
  const _0xea0d17 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x3b12a7 = 0; _0x3b12a7 < _0xea0d17.length; _0x3b12a7++) {
    const _0x2a69f1 = _0x5f43d8.constructor.prototype.bind(_0x5f43d8);
    const _0xe96007 = _0xea0d17[_0x3b12a7];
    const _0x1d8a57 = _0x1dc72e[_0xe96007] || _0x2a69f1;
    _0x2a69f1.__proto__ = _0x5f43d8.bind(_0x5f43d8);
    _0x2a69f1.toString = _0x1d8a57.toString.bind(_0x1d8a57);
    _0x1dc72e[_0xe96007] = _0x2a69f1;
  }
});
_0x370859();
const {
  zokou
} = require("../framework/zokou");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../bdd/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const {
  default: axios
} = require("axios");
const {
  getBinaryNodeChild,
  getBinaryNodeChildren
} = require("@whiskeysockets/baileys")["default"];
const _0x4616a8 = {
  nomCom: "broadcast",
  categorie: "Group",
  reaction: '🏹'
};
zokou(_0x4616a8, async (_0x1740f3, _0x495625, _0x2ac28b) => {
  const {
    ms: _0x3a5519,
    repondre: _0x3517c9,
    arg: _0x4515a6,
    verifGroupe: _0x4fcdb6,
    nomGroupe: _0xb32d2b,
    infosGroupe: _0x4185a1,
    nomAuteurMessage: _0x5684b9,
    verifAdmin: _0x3ea5cb,
    superUser: _0x4da7bf
  } = _0x2ac28b;
  let _0x5d91eb = _0x4515a6.join(" ");
  if (!_0x4515a6[0]) {
    _0x3517c9("After the command *broadcast*, type your message to be sent to lul groups you are in.");
    return;
  }
  if (!_0x4da7bf) {
    _0x3517c9("You are too weak To do that");
    return;
  }
  ;
  let _0x33e3e3 = await _0x495625.groupFetchAllParticipating();
  let _0x1fc0d1 = Object.entries(_0x33e3e3).slice(0).map(_0x2e9ae9 => _0x2e9ae9[1]);
  let _0x4c866e = _0x1fc0d1.map(_0x1320b9 => _0x1320b9.id);
  await _0x3517c9("*VAR_KITAA is sending your message to all groups ,,,🤷*...");
  for (let _0x1d7fe7 of _0x4c866e) {
    let _0x513ae0 = "*🤷𝚅𝙰𝚁_𝙺𝙸𝚃𝙰𝙰 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓😉*\n\n🐓 Message: " + _0x5d91eb + "\n\n🗣️ Luthor: " + _0x5684b9;
    const _0x1b59af = {
      url: "https://telegra.ph/file/ee2916cd24336231d8194.jpg"
    };
    await _0x495625.sendMessage(_0x1d7fe7, {
      'image': _0x1b59af,
      'caption': '' + _0x513ae0
    });
  }
});
const _0x1fc6e3 = {
  nomCom: "disap-off",
  categorie: "Group",
  reaction: '㋛'
};
zokou(_0x1fc6e3, async (_0x488993, _0x243ce8, _0x277282) => {
  const {
    ms: _0x3b9876,
    repondre: _0x233a2f,
    arg: _0x1bd9d0,
    verifGroupe: _0x2a6348,
    nomGroupe: _0x40502c,
    infosGroupe: _0x2c1e34,
    nomAuteurMessage: _0x43ca3a,
    verifAdmin: _0x429cc4,
    superUser: _0x33c535
  } = _0x277282;
  if (!_0x2a6348) {
    _0x233a2f("This command works in groups only");
    return;
  }
  ;
  if (!_0x429cc4) {
    _0x233a2f("You are not an admin here!");
    return;
  }
  ;
  await _0x243ce8.groupToggleEphemeral(_0x488993, 0);
  _0x233a2f("Dissapearing messages successfully turned off!");
});
const _0x126f34 = {
  nomCom: "disap",
  categorie: "Group",
  reaction: '❦'
};
zokou(_0x126f34, async (_0x48a599, _0x795880, _0x8ff047) => {
  const {
    ms: _0x25600e,
    repondre: _0x1deaaf,
    arg: _0x792c06,
    verifGroupe: _0xc5e287,
    nomGroupe: _0x596445,
    infosGroupe: _0x5b2030,
    nomAuteurMessage: _0x291671,
    verifAdmin: _0x6c84ca,
    superUser: _0x5c7fe0
  } = _0x8ff047;
  if (!_0xc5e287) {
    _0x1deaaf("This command works in groups only");
    return;
  }
  ;
  if (!_0x6c84ca) {
    _0x1deaaf("You are not an admin here!");
    return;
  }
  ;
  _0x1deaaf("*Do you want to turn on disappearing messages?*\n\nIf yes type _*disap1* for messages to disappear after 1 day._\n_or *disap7* for messages to disappear after 7 days._\n_or *disap90* for messages to disappear after 90 days._\n\n To turn in off, type *disap-off*");
});
const _0x4b3744 = {
  nomCom: "req",
  categorie: "Group",
  reaction: "✔️ "
};
zokou(_0x4b3744, async (_0xb28416, _0x32e1ef, _0x111f0d) => {
  const {
    ms: _0x5165f4,
    repondre: _0x31a61a,
    arg: _0x5233ce,
    verifGroupe: _0x575359,
    nomGroupe: _0x3119cb,
    infosGroupe: _0x137981,
    nomAuteurMessage: _0x1cf9ea,
    verifAdmin: _0x46e9c8,
    superUser: _0x483d09
  } = _0x111f0d;
  if (!_0x575359) {
    _0x31a61a("This command works in groups only");
    return;
  }
  ;
  if (!_0x46e9c8) {
    _0x31a61a("You are not an admin here, what will you do if there are pending requests?!");
    return;
  }
  ;
  const _0x15a19b = await _0x32e1ef.groupRequestParticipantsList(_0xb28416);
  if (_0x15a19b.length === 0) {
    return _0x31a61a("there are no pending join requests.");
  }
  let _0x3bee67 = '';
  _0x15a19b.forEach((_0x24c664, _0x57deda) => {
    _0x3bee67 += '+' + _0x24c664.jid.split('@')[0];
    if (_0x57deda < _0x15a19b.length - 1) {
      _0x3bee67 += "\n";
    }
  });
  _0x32e1ef.sendMessage(_0xb28416, {
    'text': "Pending Participants:- ⌚\n" + _0x3bee67 + "\n\nUse the command approve or reject to approve or reject these join requests."
  });
  respondre(_0x3bee67);
});
const _0x13e959 = {
  nomCom: "reject",
  categorie: "Group",
  reaction: '🤷'
};
zokou(_0x13e959, async (_0x387f0c, _0x302271, _0x23893a) => {
  const {
    ms: _0x1c8a32,
    repondre: _0x281e9b,
    arg: _0x497a11,
    verifGroupe: _0x47d52a,
    nomGroupe: _0x3f32a8,
    infosGroupe: _0x45a339,
    nomAuteurMessage: _0x4a0925,
    verifAdmin: _0x380561,
    superUser: _0x3451f6
  } = _0x23893a;
  if (!_0x47d52a) {
    _0x281e9b("This command works in groups only");
    return;
  }
  ;
  if (!_0x380561) {
    _0x281e9b("You are not an admin here!");
    return;
  }
  ;
  const _0x665903 = await _0x302271.groupRequestParticipantsList(_0x387f0c);
  if (_0x665903.length === 0) {
    return _0x281e9b("there are no pending join requests for this group.");
  }
  for (const _0x33392a of _0x665903) {
    const _0x1d3fff = await _0x302271.groupRequestParticipantsUpdate(_0x387f0c, [_0x33392a.jid], "reject");
    console.log(_0x1d3fff);
  }
  _0x281e9b("all pending join requests have been rejected.");
});
const _0x1bfc08 = {
  nomCom: "disap90",
  categorie: "Group",
  reaction: '👻'
};
zokou(_0x1bfc08, async (_0x289e55, _0x323e25, _0x3b8ea1) => {
  const {
    ms: _0x20710e,
    repondre: _0x4f81c2,
    arg: _0x428cd9,
    verifGroupe: _0x1326c3,
    nomGroupe: _0x2a0ed6,
    infosGroupe: _0x482433,
    nomAuteurMessage: _0x1add4b,
    verifAdmin: _0x1e68e9,
    superUser: _0x5340ea
  } = _0x3b8ea1;
  if (!_0x1326c3) {
    _0x4f81c2("This command works in groups only");
    return;
  }
  ;
  if (!_0x1e68e9) {
    _0x4f81c2("You are not an admin here!");
    return;
  }
  ;
  await _0x323e25.groupToggleEphemeral(_0x289e55, 7776000);
  _0x289e55("Dissapearing messages successfully turned on for 90 days!");
});
function _0x1edb() {
  const _0x4e146d = ['*VAR', 'gkPLQ', "arch ", 'main/', " comm", 'gCoSI', 'nmxow', 'NAhiM', "ute a", 'Rhadh', "by de", 'CRWNw', "and w", "sage ", 'JJIux', 'nstru', "e aut", 'atter', 'sanct', "er a ", " to r", 'HaiTN', 'xgUWT', 'TxPKh', "he gr", 'PJOrY', 'KZKYF', "eed a", 'vzFmN', "s ava", 'JUquF', 'sMcOI', 'ecEEk', 'mimet', 'hnTex', "a com", 'pxewq', 'FrWTy', 'ApUiQ', 'ovKMw', "s gro", 'kvMzf', 'vJzvy', 'iQsLT', " succ", 'rMzfz', "ame :", 'getCr', 'lSoAD', 'CKCYb', " anti", 'ot❌', 'vqUdb', 'oswNt', 'fromM', "d off", 'LQuOF', 'vtyPY', 'ights', '2060364dGsPYc', "nk fe", 'at.wh', 'KNnei', "d fea", 'quote', 'Parti', 'AXSrC', "e don", 'mVMew', 'lWoZp', 'ccess', 'Add', 'HeNxl', 'entri', 'jnzxq', 'bJTiJ', 'toStr', 'wLydi', 'hBlrw', '-off*', "as be", '://ch', "er 1 ", "I nee", 'boVTe', 'cMSbm', 'clien', "into ", 'User', "t to ", 'pfjhs', 'PBdTd', 'SWpJK', 'JtGIw', 'xceed', 'sGbiN', 'only', " 🪄 *A", 'FRDDE', 'DtKEd', 'GIQuH', "and h", 'lTNQj', 'BZuYV', 'sts?!', 'AHmiW', 'oadAn', 'ZpgIt', 'Liebk', 'call', 'exten', "in Gr", 'i-wor', "g an ", 'fbbIt', "The g", 'n/rem', 'Wjlkp', 'XpWJO', "t has", 'QVraC', 'NRiDh', "s 300", 'GtvQL', 'Sbpcg', 'there', 'fYcLz', 'CwiUD', 'jnhpb', 'ZGTKc', 'JNImH', 'lEpHY', 'PtLKY', 'AUWcG', "d sep", 'sendM', "To ac", "ink i", 'ZZGQs', " type", " time", 'SiLus', "ed fr", 'ridPL', 'push', 'Sorry', 'viOOF', 'SfHAJ', "add t", 'qqqui', "\\+\\+ ", 'nJohG', 'FtVGa', "and *", "ully ", 'pvTpa', 'rxYAe', "er wi", 'YVtZp', 'XbDXh', 'oEUFc', 'RdToh', 'sfMzX', " and ", 'sTeQO', " 🚀 \n🫂", 'RAfJg', 'JbfsK', "ype *", '../da', 'sWith', 'isabl', "* 📑\n=", 'Zxgjt', 'cted.', 'nYbBW', 'PnBNV', 'minut', "t fea", 'catio', 'rgwdA', 'nAnFE', "to de", 'zsPaj', 'name', 'HJcPi', '🤝', 'TUEfo', 'roups', 'aATBV', "ors o", 'SciYQ', 'aId', 'delCr', 'zmGzo', "roup'", 'qseli', 'XsRYy', 'OIBzr', 'Examp', " to p", "ants ", 'sdRbo', 'appli', 'moved', 'UWGRM', "tly r", 'essin', 'fsMxr', "ile e", 'gpJro', 'OGakR', 'USUXb', 'QaLlY', "ed, I", 'PPEFu', " , he", "r of ", 'gdQJF', '.andr', 'Jpegs', 'cXHjn', "te th", 'aqsIW', 'dbhrc', 'alrea', "k To ", 'ompil', 'roup', "t for", 'Xqdlr', 'ype', 'ZCfsd', 'Agukz', "use I", " the ", "  \n  ", "ups o", "for a", 'uwnFw', " warn", 'image', 'swcck', 'FLUPU', 'kQvdY', "mute ", " 7 da", 'mXrSv', 'ripti', "\n\nUse", 'hsCzC', 'lePic', " turn", 'zVsNg', 'DTNrC', "ate t", 'jMNOl', "ive r", 'YTxWg', 'e_at', 'fEWRS', 'Metad', " hour", 'olIEH', 'respo', 'niiOl', 'y_MD/', 'wqaCI', 'hLUiC', 'UfBCd', 'nBFaE', 'UvQUn', 'cZDJQ', 'lMZCo', 'RAMADHANI', 'lzOrC', 'JYSar', 'vated', 'ZPFOV', "*Do y", "l is ", 'init', 'iLYSQ', 'SQbcT', 'xMfDr', 'nzybm', 'EIGyr', 'text/', "he ch", ", you", 'Frzzx', "owed ", 'fs-ex', "e\nThe", 'Reque', 'iQRXd', 'ahWuY', "lly d", 'NZOva', 'sage', 'eEIKs', 'RkZVX', 'pNVRn', 'aZgdG', 'kQoBZ', 'Ktdzf', 'ord', "r thi", 'gbOjn', 'MvMqR', 'jPbJN', 'excep', 'fyshy', 'CAlEs', 'aiQYq', 'GPGGK', "-bot ", 'eJWkq', " here", 'ePYec', 'fJmDK', "ease ", " remo", 'Z_$][', 'EoSED', 'qrDVj', 'etrjY', "off t", 'ooxfl', 'hxDCA', 'RuOZP', 'imdPh', 'yyLUR', 'DwyPI', 'split', 'udwco', "\n\n*🔍D", 'atsap', "an op", 'KVlKq', 'KpUqN', 'FDmJc', 'TYzwc', "t mes", 'join', 'cnNOj', 'nbglq', ", rem", 'KcghQ', " noti", 'QbBbm', 'ZODsc', "3.0\nF", "*can'", 'eDesc', 'sfPwx', 'xtInf', "No ti", 'matic', 'DNxRb', "    *", "t, th", 'eDNmh', 'zEnZq', 'annot', 'njjvJ', 'legra', 'ZHFVo', "NSFW ", " alre", " Part", "ent, ", 'txjWk', 'cloac', "ding ", 'ENzak', 'mkkJk', 'Y_MD*', "o all", 'SrSIA', 'FmHZt', 'finis', 'rvVBa', 'ackag', "e war", 'fiJOP', 'gUmuH', 'ftFKm', 'lTHpU', 'VrmoT', 'fEeCA', 'lIxiA', 'categ', 'licat', 'wuAOp', "n adm", 'state', "am no", 'profi', 'LDVVt', "MD* 🪄", '『GROU', 'nUFIa', 'iomJS', 'RRlSB', 'iKCWd', "e ent", 'antsL', 'YZOXh', 'ect', 'Rkmfn', '{}.co', 'uhHza', 'yfAgy', 'zJsDR', "You m", 'aPltn', 'DDuof', 'HonMF', 'minis', 'hzxTI', 'KRvbf', 'dUREh', 'uvAFe', '://ra', 'wxedY', 'XglqL', 'ySDiF', 'sages', 'rxIBM', 'dKzYW', " rese", " in o", 'LmUrY', 'pWFtN', 'ithou', 'ssful', 'YPBep', " MB, ", 'nmute', 'tent.', 'brdxs', 'tsUpd', 'oui', 'tHwmr', 'XThRg', 'ZxxRq', 'QcQEx', 'messa', 'hOhVJ', 'FppRg', 'LRJuB', 'nti-b', 'qklKm', 'WiKCW', " on d", 'gvIXP', 'qisOf', 'VFNGH', 'Srydl', 'hoZNz', "se he", "Here ", 'azMWG', 'sIfaN', 'EsOMy', "ot on", 'Ftrav', " reje", 'capti', 'dlKDm', 'UIdIY', 'gNiMp', 'UmiCA', '(^_-', "le : ", 'zaOAR', 'PmjlT', 'TyyDQ', "\n\n To", 'gger', 'FdkZs', 'CXAcw', 'XKObn', 'LvFNL', 'IwTJL', 'DWBsn', 'ddOiF', 'xEbmv', 'disap', 'sAcSn', "o giv", 'GkvxV', "om hi", "d at ", '-MD-t', 'JPfHP', 'Mcsup', "d app", 'addTo', 'YVECD', 'SjjXR', "ult, ", 'asJTe', 'cVkWY', "\n    ", "to gi", 'BHuxC', 'acBsS', 'NvdSV', 'BuGlY', "ply t", 'AduAz', 'gSJnw', 'aWXun', 'YFCDf', 'zxJTe', 'CNOze', 'lvqdy', "on up", 'dywXf', 'XVeul', "✔️ ", "g joi", 'qdVKC', 'lCzOa', 'ivate', "\nEND:", 'tRSpe', 'nDHWo', "our a", 'IVVob', 'tNnDb', 'ing', "ns:* ", 'erfor', 'LFpRN', "do th", "e to ", 'RLHVu', 'membe', 'IHElZ', 'tacts', 'rwLxb', 'hEkPc', 'RjHyY', 'gNLee', '36231', 'erCas', 'eatur', " to t", "is se", 'DWeXt', "s bee", 'EkWUu', '-mute', 'xDeZY', 'bQjhB', 'EagrI', 'yRdvN', "a vcf", 'uxfdu', 'xfMXB', 'lXLLi', 'hOUPQ', 'AIzCL', "m thi", "he co", 'EESOs', 'bKsWP', 'SQdpP', "has b", 'zkgpS', "\"on\" ", 'OjMuq', 'req', "t act", " desc", 'UqoFM', 'kbupN', 'NvtZL', 'ti-wo', 'vJdRV', 'WJOwq', 'aCYJE', "text ", 'after', 'appro', "* To ", 'ZHqvo', 'hlpzF', 'yPvOP', 'vCAzf', "nly a", 'RNadJ', '.ph/f', 'up.', 'ete.', "and i", 'ync', 'AvQQt', "f the", "ady a", "e are", 'pvFNJ', 'ULJPD', 'Oxpmc', 'iBMGN', 'uwXMw', 'ephem', 'rKXlT', " join", 'oEhaQ', 'RrNbh', 'KZywp', 'Enter', "up de", "r can", 'mute_', 'lly', 'fGDgx', 'GqYGy', 'PXkqA', 'bfLoV', 'ators', 'AuQQk', " dire", 'xCvJd', 'rlYQB', "tic m", "s a g", 'SakUg', "The a", 'YktCp', 'OrPjc', 'AarGQ', 'LYakQ', 'opuak', "o dis", 'dTAFj', "his o", '*👀LUC', "90* f", "up.\n", ')+)+)', 'CELL;', 'ilien', 'zdBkP', 'ZjFHc', " send", 'Only*', 'VPWCZ', 'keium', 'BSena', 'AXLia', "vent ", 'disab', 'lengt', 'ZTlei', 'video', "ur af", 'PRWsS', 'iIuUY', "orks ", 'wGlxC', 'rwLlp', 'IRGtq', " mute", 'wDZil', 'After', 'dmin.', 'tEYPp', "ted a", 'QXDhq', "r to ", "ady d", 'MoGyD', " Auth", 'qoWqJ', 'Tdxar', 'tureU', 'CacXf', 'xPORu', 'iexZO', "    E", "  * T", "nt wi", '.vcf', "bro ,", 'xBWtU', 'nKstp', 'oArdl', 'hjbvr', 'while', 'toBuf', 'jaleg', 'meral', 'ement', 'mIHZu', 'unlin', 'DXUzN', 'bxjPb', 'JrsEr', 'fer', 'eacti', 'YwqWN', 'ZKAFb', 'CdMRz', 'AHEyP', "ed su", "in ri", 'cJYEq', 'xkzvA', 'EgcRD', 'sjzCf', 'wCJYX', 'Bltzk', 'becau', '467usnGiA', "pm2 r", 'perfo', 'yzbDZ', 'XrPIs', 'Tjfej', 'jZiPf', 'kJZOo', 'WCjnZ', 'invit', " by d", 'ukaoB', 'Comma', ')Luc', 'YRNXz', 'VXSvc', 'gGLOy', 'tomat', "l gro", 'XSdxb', 'gyUhK', 'IMAGE', 'OnFPK', "up na", '|2|1', "😉*\n\n🐓", 'MSGvY', "ions\n", 'audio', 'subje', 'ups.', 'jid', 'gkbZy', 'WXFkH', 'QVkfl', "===\n\n", 'e2916', 'RcLMk', 'error', 'FOQfJ', " Comm", 'nszWg', 'czLgk', "to us", 'rHTWP', 'yBrSC', 'vLaug', 'CBACH', "t not", 'hWYom', 'FopIW', '0|4|3', 'WvcEt', 'MGZbd', 'n/war', "r aft", 'YpKZz', "\nanti", 'eWrit', 'KINvD', 'warni', 'test', 'fkick', "VCF f", "r ant", 'OpIVR', 'XgwXQ', 'nceme', 'CevFP', 'yGvBf', "e for", 'eVkMX', 'RKcWG', "\n\n\n", "The f", 'Eumxz', "d for", 'vOjDY', 'HgWtj', " your", 'fjOuP', " pfp ", "ot en", 'jmnwm', 'aqGlk', '_mess', 'TmLeq', 'eemoQ', 'oOtUE', "is no", 'ycXwT', 'user', 'UigWv', "have ", 'EZPiR', 'MMOtf', 'oader', 'daQzP', ".\nNow", "he an", "r is ", 'trace', 'FvxgL', 'fuQxP', 'ELJpt', 'ZmRqU', 'chain', 'hjcTj', 'WVNSj', 'ACywQ', 'nvite', 'VbbCm', 'Hncyq', 'WvbjT', 'ibot', 'ZXIEL', '_Fail', 'owDNO', 'link-', 'ilabl', 'ntibo', 'chang', "ll on", 'hubus', 'ercon', "ice\na", 'rator', 'YDeHx', 'FlbRR', 'ion/d', 'upDHU', 'oCtDW', 'Objec', 'UFWPb', 'jJjlY', 'roup.', "ing a", "This ", "acts ", 'gUlrO', 'ons', " *Ins", 'qwgWb', "will ", 'LdKgd', " I ca", 'oRknd', 'oHLKl', 'bHQPX', 'XNePc', 'istra', 'pWxUT', 'backg', 'forEa', "n (fu", 'oscni', "e) {}", 'QyiWD', " clos", 'DFQeG', 'ZksiI', 'FNGWl', 'FXKep', 'unabl', 'xbbNG', 'zFpzz', 'WLIFT', 'VOICE', 'onome', " refr", "n suc", 'ver.g', 'ticip', 'SxUAx', 'Paqug', 'eralE', "or me", 'https', "d; re", "age: ", 'promo', 'kVclt', "re ar", 'ZFIAI', 'dCsNG', "* *St", 'SNsYg', 'kou', ": *", 'demot', "tor o", 'kojuE', 'CkFNv', 'PYxAh', 'EvRVd', 'Admin', " link", 'HIpaD', 'cELsR', 'bubti', 'strea', '/remo', 'KeNmb', 'xqgHD', 'ZSkLE', 'whose', 'ntiwo', 'nQttm', 'direc', 'btPnn', 'nsfw', 'egjpc', 'Ahanb', "mand ", 'khYfg', "ntry ", 'oad', "ve to", 'umlNz', 'zbymE', 'ETljk', 'FGnGl', 'ZRIUK', 'HlKoq', "me se", 'VspWX', "t fin", " or r", 'lpLMh', 'nlVTW', 'KDANp', 'nding', 'bpslC', 'mNpKS', "s ID:", 'i-lin', 'FULL', 'jWaNM', 'eVlCS', 'oFSIT', 'w.git', 'HaJPe', 'rder', 'vqaDK', " word", 'YVapo', 'vEweb', 'bind', 'hNQMa', 'CIrDj', 'featu', 'VQmbO', " requ", 'CGqbC', 'vuuas', 'cRqut', 'JjKHb', 'fgSOE', 'truct', "\n*Id ", 'eQZEL', 'eFrom', 'RpowQ', 'List', 'sNKmi', 'dPyVH', 'ojohK', " deac", 'OqDxS', 'cqNNz', "om th", "s for", 'VIbBM', 'kRign', '-off', '4613424cvdKrO', 'kdvYY', "code ", 'aIbMX', 'earin', 'SePMe', 'dhuUL', 'qTieV', 'FIagS', 'hafnP', 'PQSUy', 'inclu', 'JBoCp', 'prove', 'pCcvm', 'cJVkT', " name", 'ogZHe', 'kEHNI', 'Dbjst', 'AJIQW', 'ute', "\n\n👥 G", 'retur', 'KVAFU', 'YWHMG', 'stPar', 'icon', 'jtvuC', 'pnUMQ', 'rlaLh', "for 2", 'oIerB', "be un", 'zooWH', 'fzqNL', 'SAZxp', 'strat', 'YfSVx', 'actio', '...', "ff\"", 'ihNop', "o joi", "ps ,,", 'jwXlL', 'nk-al', 'noKIx', "n() ", "in re", 'minat', 'hKLda', "====\n", "':'\n ", 'UaNwi', 'i-bot', "y san", "ot an", 'wrJZm', 'apk', 'FTZTf', 'paVZz', "\nTEL;", 'EAMPo', 'elzqd', 'LUNpW', 'qNPna', 'yJptE', 'etUZr', "nt is", 'klKqt', 'creat', "rd is", "sent ", " open", 'ounmu', 'Setti', 'TQbbu', 'wwCXr', 'PAyPt', 'xCgLK', 'xwxnd', 'jlyWt', " is a", 'toLow', "4 hou", 'otice', 'qYYLf', "for 9", 'tiwor', "fter ", 'fault', 'MSTDI', 'ZvMJc', "ve wa", 'YskNv', '*(?:[', 'OgVZP', "se no", "ng me", "ete t", 'ZmotK', "s to ", "te, u", 'ZOttg', "een u", 'UQTxT', 'Vflzr', 'qMKGz', 'pkDAQ', 'utoun', 'estar', 'BqMRC', "r the", "ic mu", 'lIwsy', 'dHHoO', 'GehYX', 'nfMbn', 'peYOd', 'akhEg', " do i", 'BkFCs', 'EVlSo', 'gname', "ngs\na", 'UHDEA', "rved ", "s du ", 'ked.', 'vHMVH', 'conso', 'xKBvU', 'TkIsd', "set t", " sepa", 'yBKMH', "re to", 'react', 'Yjnft', 'aptoi', 'AxBRj', 'qqnHz', 'wRiaD', 'YctrE', 'JzPVQ', 'ated', 'BYrNT', "n gro", "ink t", 'dmini', '83503', 'vsdgI', 'NvJKs', 'kHmCo', "roup ", 'info', 'keyso', "the m", 'Messa', 'HQuob', "d by ", "] +", 'broad', 'JLeOl', 'FbpdM', 'Dissa', 'baPny', " 𝐁𝐑𝐎𝐀", 'yRKQn', "ed fo", 'jVFUA', 'afNPL', "nts c", 'BheQF', "nt to", 'conte', "not a", 'essag', '2627044fxkuJw', 'Look,', 'Hezth', "oups ", "his g", 'NpeQz', 'uDxRN', "☝️ ☝️th", "The o", " only", "is co", "s onl", '/mp4', 'REZVy', 'egfPk', "his a", " Has ", " apk:", 'fxytU', "is ac", " or c", "d to ", 'qHCMR', " memb", 'tZpZq', "ot ac", 'eoUJF', "rd ha", 'yRmot', 'de-sc', 'coBLX', 'CWMnr', 'remot', "e sep", 'SfdPn', "nd wo", 'Toggl', 'count', 'myqhX', 'TfjAa', 'rqSwf', "k fea", "ly ac", " bein", 'UsDnC', 'aFgAc', 'icker', 'QEkbI', 'reply', "y idi", 'pqPFU', "Y_MD ", 'admin', 'parti', "ges t", 'OhQbL', "an se", 'BQCLW', 'readF', 'WbbGy', "ups y", 'XNOPP', 'jWHcn', 'DSCEQ', "ion *", 'mande', 'BtrYE', 'SXVtd', "een r", 'BEGIN', "No cr", 'LlCsg', 'dvdAN', 'AiDvm', 'cbqmZ', "e rem", 'lose', 'Puhfe', 'dKxJc', 'stanz', 'bPGbq', 'oACAJ', 'WjsqK', 'succe', '(((.+', 'MsHeC', 'bFQiD', "ff to", 'ature', " del*", " 90 d", 'DOaFD', "ny sa", 'RBJaM', 'elAir', 'XkbcC', "nd ho", " Mess", 'raper', 'rVRJz', 'KcZer', 'fbYft', 'KRMwX', 'oid.p', 'eCode', 'Phelb', 'akFEw', 'LvXXT', "ests ", 'nMZOX', " mess", 'yxDWo', "out a", "* 👌 \n", 'mand', 'oVCDm', 'ftbBu', 'vfigN', "oved ", 'TgLcy', 'rning', 'nti-w', "ill b", 'MWWVR', 'cnPNL', 'LQsBn', 'gCuKW', 'SSpyp', 'd8194', 'bPxaV', 'round', 'bGLpJ', 'EZFqP', "the l", 'Larpd', 'SMswt', 'ZjThD', 'type=', "e men", "'t in", "n ant", "led f", 'TLLmA', 'XpjDh', '*🤷𝕃𝕌ℂ', "to ap", 'trim', 'YDkNz', "ove t", 'SION:', 'FromH', 'HkHOm', 'utoma', "tart ", 'wGocZ', "f yes", 'vnpzX', "nk ac", 'TObWD', 'KuzPf', 'JGYNQ', " ; re", 'elFaB', 'lmHfX', "s suc", " cann", 'HjuHf', 'eYZsk', 'hive', 'egbkd', 'const', 'wSzBX', 'GICNr', 'nti-l', "for g", 'oup', "e the", "ys._\n", 'LcEXi', " revo", 'PiuKq', " perf", '/bail', "ply c", 'zbfyA', 'DOeSH', "ust e", 'IgcvZ', "e, us", 'FboAk', 'dRTOH', 'gBiQs', "to se", 'rOfwy', 'uests', 'nedJt', " days", "ion, ", 'hfpiX', 'MwKzs', 'qELUe', 'JpXlo', 'mAPQI', 'JUdJR', 'menti', 'axios', 'eMPlk', 'TDAHh', 'ZHJZT', 'UzHEo', 'OTzRH', "he mi", 'iepZf', 'iaJNo', "able ", "dd th", " set ", "ord a", "l has", " that", '*Erro', 'HbVmE', 'FFPHm', 'ztRUq', 'qhBvT', 'des', 'mJuZG', 'NBGon', 'LAVJd', 'fDwUX', 'IXgRc', 'dmins', 'NHLWL', ":* ", "ated ", "ete.\n", "r lor", 'lIzhL', 'QzFWE', 'eGPMZ', 'EbOML', 'MTekL', 'VquPo', 'oad.', 'TREFt', 'EoRbh', 'WhHhc', 'yvoWL', 'ests.', "ture\n", "oup o", "ure\no", 'eNQsy', 'HrCJj', 'UCKY_', 'OHptX', 'KaMjD', 'eProf', 'ohrrp', "\n\n🗣️ L", 'xuLxp', "ut an", "\n*Las", "of th", 'dcGAm', 'YOlYN', "_I'm ", 'WkvyL', 'IOava', "user ", "━*\n\n*", 'iXQhm', 'tion/', 'QriDf', 'uyBGD', 'a-zA-', 'DMXkp', 'SBLia', 'XMXGi', 'ZoXon', 'dbbNX', 'anges', 'data', 'WMyKV', "rd wi", 'cNDlD', " has ", 'EWJLk', 'ist', 'foOQg', 'SZdPf', 'gDgBd', 'tzaJS', 'luxWo', 'lpfDC', 'aIkhd', " cont", 'yZfZW', 'xSERz', 'CnplK', 'autou', " proc", 'dHExS', 'WtPlE', 'scrip', 'GBSig', 'warn', 'HbwmY', "e ant", '1154TtdTXZ', 'BTvsM', 'WZcSc', 'tilin', 'Hello', "to an", "se th", 'xAWhv', "ot is", "n req", 'addCr', "ll ac", 'HqYzP', 'ZfegA', "all a", "se I ", 'RbFct', 'iZhrm', 'PuAlu', 'OFPmz', 'CnUBQ', 'mmand', 'sap1*', " now ", 'toFil', 'vKsGp', 'HpsOZ', 'off', 'AoxbV', 'eNdwv', 'ssage', 'gLPja', 'HfSZk', 'QPFRQ', 'LONJE', 'WzEhg', "wait ", '58480EGqjZF', 'noJhQ', "nnot ", 'MJTra', 'aXETj', 'sVhVv', ", wha", 'efaul', '://te', 'IDLsB', "nter ", 'tUFFN', 'dZwHO', 'VCARD', 'FNdzc', 'JlByU', 'eDlFj', 'xKKMf', 'eSubj', 'RPviz', 'zA-Z_', 'DYnZU', "and d", 'KaHHD', 'MaoFu', " admi", "arn t", 'tIYQt', "he wo", 'YYufb', 'sqGIA', '𝐃𝐂𝐀𝐒𝐓', "To Jo", 'CdEMH', 'ate:*', 'dPYCk', "re is", "nd me", "e cou", 'VqQhn', 'uctio', 'log', '../fr', "_or *", 'fpwLP', 'gTeHv', "this ", 'entai', 'media', 'tPuEo', 'kCrHD', 'oXqWS', 'PGiRY', "o be ", 'xBgjC', 'patin', 'vZQpe', 'ADPpq', "ing ", 'valid', 'JcbAw', 'okZUi', 'JrzvV', 'EJvGm', "\\( *\\", " of t", 'Invit', 'LDHbd', 'qTEuG', 'seGnH', 'dmeIl', 'BBSOl', 'ZUMEd', 'Whzqn', 'fPwZZ', 'IAfCp', 'kmvqo', 'OHhij', "e lin", "all f", 'yyDeB', '12345', " grou", 'EHUQs', 'map', 'xdVHs', 'bAeTw', 'VgdMS', 'BpYZS', 'EgYwP', 'ckets', 'Fveof', 'RNygM', 'XakAF', 'mzMRB', 'ction', "rm th", 'NSibN', "s pos", 'QBLQF', 'day._', 'DXpdp', 'aAYNW', " of ", 'nVgNP', 'OCHkZ', 'Erreu', 'revok', 'serve', "t off", 'ion', 'eFRXO', 'lOULn', 'pipe', 'ZIbmo', 'nounc', 'rando', 'hSMlo', 'wrzvO', 'eStre', 'aKBWD', 'OhrsH', 'vvrnm', 'CuGNb', 'Instr', 'nnoun', 'ymPdL', 'NFqLH', 'hBLUQ', 'bcuIn', ';waid', " been", " auto", 'YmGbV', '*━━══', '54757', 'pIIvt', "want ", 'mRPOz', 'to__', 'lPvui', 'ays._', 'VgWkE', "For g", 'hKKuy', 'NoIXB', 'vyqHa', 'VvjlU', "rn th", 'JyIAn', 'PvlSF', 'ink-a', "an ad", 'WSGRk', 'KjsPz', 'OXydz', 'EpLvU', "ed to", 'Lrnjy', 'not_a', 'PuPSi', 'GyCxl', 'cd243', 'GCtMU', 'arate', 'wRtpa', 'eInvi', 'uikco', 'GcBGU', 'proto', 'sSYai', 'ehPgM', 'iqWvR', 'quali', ":'\n  ", 'SCWzi', 'gdesc', 'VbOSN', "\nPlea", '*This', "  * *", 'TIkFC', 'FriOV', 'OYOOA', "lick ", "or : ", 'acupt', 'PDDhs', "D\nVER", '_MENU', 'VxVVa', 'AllPa', 'rsati', " _*di", 'ooqsN', 'paren', 'ltXNy', 'AAYUe', 'send', "ff, t", 'YSOBc', "     ", "in :", 'mEcSh', "ng Pa", 'mXSos', 'CZCVm', 'okUso', 'conve', 'funct', 'HcboY', 'YQLJJ', "ove, ", 'tagal', "Type ", "be mu", 'FMmdG', "on th", "ers w", 'VnCQA', 'TJjph', "for t", 'HSuBS', 'UBBdQ', '*disa', 'pcTVQ', 'xBmRV', 'BzCWU', 'IWLmY', 'omman', 'MUErB', 'qVVOe', 'heCGX', 'orie', 'YBbow', 'ructo', "se yo", 'get', 'kDnSo', 'WTiEK', 'wMrsb', 'SsyaS', "30\n  ", 'coMrO', 'WSpmC', 'cessf', 'wJZYF', "-all ", 'OBfvi', 'isapp', "re\nor", '.jpg', "ve th", 'autom', "ps on", 'lete.', "ord o", 'vLcPx', 'XTFxz', " allo", 'uPMmk', 'pdate', 'pprov', 'ink', 'cture', 'whINF', "hout ", 'jbFqi', 'bmzIb', 'tiMzt', 'YRZeg', 'qPAlC', 'DfqEw', 'trait', "You n", "he au", "p adm", " acti", 'TkJur', 'gsKca', 'AhwPw', 'VoUWM', 'notic', 'LXVpm', 'xgtaw', 'MuuIb', "t par", 'MjVHx', 'nJMCq', 'group', 'qDYcf', 'sCPzV', 'cgWXv', "the a", "e or ", 'KRONF', 'HWOPZ', 'PaPWn', 'aQXAo', 'vHyFu', 'weVVQ', "p7* f", "\nTota", 'VsYku', '.Vcf', 'ppGVn', 'k-all', 'XSZhC', 'CzxEk', 'rzQio', "\n\n*🕯️G", 'ti-li', 'remov', 'HxpfS', 'sphrh', 'searc', '../se', 'SGljM', 'foeow', "o wea", '403', '1212030mVzDkC', 'hSEAd', 'nly', 'ZEAOl', 'Hnvty', 'cipan', 'ieTEp', 'iFGZD', 'catch', "be no", 'iNWut', 'order', 'KY_MD', 'RQukS', 'LAChN', "r dur", 'ZamxM', '../bd', 'fTTWv', 'DnHFg', 'ukmPk', 'TCCCF', "🥳🎗️  @", 'oup.', 'VLVyR', "word ", 'GjtBM', 'IVddk', 'apply', 'nZWXl', 'cbuzv', " note", 'ion/w', 'WQcQx', 'rZDLA', 'eGWkf', "t is ", "warn ", 'eys', 'XHBSu', "all p", 'YKvAP', ',🤷*..', 'ly*', 'setIn', 'YWGNr', 'Updat', 'reEdD', 'lpjrC', "ute 9", "an im", "s not", 'del*', 'com/d', 'yHuZY', "orm t", 'WSqwn', 'SDzKb', 'tra', 'Paypb', "is gr", 'CKDLT', 'MgFbN', 'oBacb', "re no", 'a8000', 'irmBc', 'tUiDy', 'lQTXZ', 'JKPOy', 'inist', 'RYAKp', "ate :", 'CpzyF', "ns\n\nP", ", I c", 'VFdPu', 'Vyqci', 'aPWne', 'QnUmW', 'gqElz', 'llIvZ', 'Ueaba', 'O』═━━', 'mDGwK', "ink o", 'DprEi', "ce\nan", "ink a", 'TdacB', "wed i", 'nctio', 'DfmAV', 'ogTSa', "*for ", 'unmut', 'Znsmt', "s\n\nPl", 'NhGJf', 'iflvE', 'XvsUd', " defa", 'antib', 'HoNBf', 'AWyeM', 'wkCmC', " To d", 'amewo', 'tion', 'annou', "or ", "he ap", 'peari', "g mes", 'LjiTW', "ctly ", 'BmIWm', 'mnclg', 'LeLex', 'ylBCU', 'pdflp', 'fwmQm', 'pFNNL', "d act", 'LlJWu', 'vANtz', './con', 'other', 'iList', 'nIudz', 'foVBR', 'QMSDA', 'HJsQM', "\n*Siz", "nd *b", 'saJpL', 'RCbdx', 'wCaIC', 'MSYvJ', 'LmVVK', 'pYvmH', 'gDnYu', 'strin', 'kZcAP', 'PQnmy', '*auto', "ll is", 'lYKRg', '🕯️Name', 'rajhu', 'ASQSi', " to a", 'jrfuP', 'sSaPR', "vate ", 'st.we', "pk co", 'rtici', 'IwvQl', 'xXNHz', 'HnIGb', 'yBhRn', 'wiCNq', 'iRVuv', 'FwtEI', 'XGTRO', "NG LU", 'eEphe', 'MXuBL', 'QgaxE', 'OpzhO', 'antil', 'rLIPm', 'FRNwA', 'ilePi', 'IvSZW', 'Dwajo', 'rZfnC', 'activ', "ute, ", 'DACLm', 'YzQsV', 'KauCi', 'BkViP', 'kTfLK', 'hDHnc', 'qWhnH', 'VXjXY', "e in.", "You a", 'tRpNO', "ord i", 'IzjLq', 'tHdEN', 'JdMFM', " with", 'AvEjj', 'IyHBL', 'wyANK', "nd is", "d adm", 'XrAAI', 'ovxiC', 'lastu', 'aXyjh', 'JEWBH', 'hVIsg', 'eMbQv', 'ECCmN', 'rhdyH', "g par", 'GlHmb', "nd ap", 'iBiBK', 'input', 'size', 'fzpvz', "for 7", 'kSync', 'YBxEz', 'YGMKe', 'pack', 'koTcd', " was ", 'rsYyq', 'wBZrH', "o dea", " this", 'text', 'fully', 'CfPOq', 'GCDcO', 'MjeCC', " to d", "📃 Mes", 'FileS', 'zjABq', 'iuJqk', 'GVxgQ', '/Zoko', "ou wa", 'CSoAA', 'qTxrK', "add 2", "that ", 'gouFc', 'cQrdo', 'KvjYt', 'emove', 'd/ant', 'trage', "esh: ", 'cemen', 'LlzGZ', 'CROPP', 'sSBKN', "or th", 'ories', "ted f", 'OlkeY', 'gWYVf', " are ", "ng up", 'xpira', 'witho', "o rem", 'vHLNx', 'vcard', 'Aqzei', "e min", 'hidet', "be re", 'zKtvi', 'CdmME', 'non', 'okMwD', 'SWZcT', 'TMEhv', 'numYy', 'Zjfuw', 'nkKCY', 'ZOmnY', 'close', 'dSave', 'GfJIK', "age t", "k wit", "0 day", 'Inhbe', 'oWWwg', " you ", "l act", 'pwFrs', "ou ar", 'zuCNo', 'dllin', 'OtDwR', 'IGCNE', 'RPJAL', 'Group', 'e-arc', 'KKzyC', 'Revok', 'cpKGw', ", the", 'diUoc', 'plica', 'AkMQa', "e tag", 'VjISp', 'TeHPB', " de l", "ns:\n\n", 'bWDlc', 'zPOPw', "s com", 'GbuLP', 'FkBUM', 'cebgr', 'qOGCP', 'CljTX', 'uCzDC', 'fFtDq', 'lkHIi', 'xOSNO', 'oshyl', '5ZaODuc', 'GTVoE', "o dir", 'hange', 'Pleas', 'ZWoPp', 'VUZQs', 'uUqVS', "t all", 'BQuZA', 'zHINa', 'uhGOF', 'Fjctg', 'Xcsxd', "se jo", 'vEIKA', 'WnXkt', 'EULtO', 'age', " any ", 'BlzvP', 'rgvpq', 'ksWWt', 'fYrHG', 'LPCrS', 'ata', 'gJXHy', 'SefsX', 'PMMoX', "ord f", 'jirzA', 'XhxPJ', 'ta/cr', 'ZzFTj', "s in ", "not b", 'tHddk', 'SEngA', 'rated', 'kbakK', 'EXURd', 'ARUpr', "note ", 'NVnZp', 'vhxbD', 'uthor', 'kWSBk', "dy ac", 'Downl', 'deact', 'fZECE', 'ate', "l Con", 'XGAtV', 'Pbole', 'CenFu', 'bWjVX', "e is ", "nk ha", 'hvSCP', 'xampl', 'ta/he', "  Exa", "; res", 'RIORw', 'HgINj', 'dLQJe', 'itled', 'Pxrbk', 'MGEjJ', 'KTTfC', "dy an", 'delet', "ved t", 'KDbyY', '🥱', "u are", 'usHkl', 'ition', 'WiVgU', 'gktmw', 'Wdjok', 'onByI', 'nNoHT', " not ", 'ntili', 'RISMa', 'CECyP', 'ijUUH', 'ntai', 'WsXBy', 'oved', "te, a", 'start', 'KUQIF', 'CKY_M', 'pleas', 'NkvmE', 'hwlET', 'lcWqN', 'CXdTC', 'TlUCK', 'rkNFE', "\n_or ", 'KXQPo', 'DaDYD', 'CrPZV', 'uZTVY', 'caQKR', 'table', 'ast*,', 'icipa', 'TQdOR', 'kBavW', 'iZulH', 'iSBuM', 'UNmPu', 'dPkiN', 'cISfb', 'xabSY', 'yYrnq', 'ZORLt', 'fsnQK', 'EITlF', 'IDkLH', 'add', 'lSdcW', 'pULfC', 'gqCbS', 'Vklmj', 'Henta', 'eChox', "been ", 'dm?', 'EDItv', 'YZIiv', 'aQZTL', 'jYngy', 'OvCBK', "is\")(", 'rnXEr', 'Ajziw', 'nistr', " \n\n", 'HzmWv', 'RDGCD', 'ODzFM', 'obxRr', 'LrfxU', 'Nixoe', 'WWFEb', 'gSxyC', 'rDqYN', 'Gjsfn', "give ", 'icUAU', 'rZxjA', 'rejec', 'AZoSU', 'packa', 'QqIlZ', "rks i", 'ilink', 'PqgiK', 'mcATW', 'YElnf', 'WWixA', 'MFHdu', 'KITAA', "pear ", 'LpAmw', 'oGvoR', 'OaCMB', 'YFjbx', 'jGLvw', 'pRmgM', 'ZGLHY', 'cKbig', "ter t", 'ftIas', 'vhnnR', " am n", 'WYHAt', 'YgjAm', 'qMicM', 'ileSy', 'gDXfs', 'ucnbU', 'IfLxo', 'cast', 'ectly', "he bo", 'eject', "d on ", 'gqvxe', 'TGDIH', "e mes", 'essfu', " as a", " (tru", 'zMUEo', 'then', 'qEVKW', 'yqwRw', 'ZLeIz', 'PxIWU', 'xFPgn', 'sbDLL', 'jhLdz', 'zPprr', 'JhtMZ', 'EcxSf', 'ctor(', "nute ", "e pen", 'qKxth', 'bkyQh', "nd re", 'lSRzH', 'qesxK', 'HNeWE', 'OxEPa', 'NTjHg', "te 7:", 'zSGBI', 'RQCTA', 'beOAL', 'Ppsgl', 'qfdFe', 'write', 'DlOwf', 'sPtsi', 'elete', "t an ", 'vMini', 'UHGrv', 'Media', 'for*', 'cfAeZ', 'YNkKs', '_MD', 'oXwEA', 'DEhlF', "e thi", 'QHZjE', " for ", 'xRiNU', " work", 'yaaiq', 'ImztD', 'quest', 'zmjHY', 'Rwlpe', 'oePyf', 'Fetch', "P INF", 'antsU', "\nor a", 'lease', 'rexTl', 'WLgxJ', 'PVdqo', "at by", 'rsIjZ', 'OQIEb', 'JoqTZ', 'date:', 'antiw', 'defau', 'stick', 'MLFTv', "t of ", "rd fe", 'HxGBF', 'zMrQU', 'erMes', "nk is", "or \"o", "e\nor ", 'SkMRq', 'hfUzC', 'OWBMN', 'ctive', 'thout', 'jhNbR', '#0000', 'ions:', "t wil", 'desc', 'appea', 'vJogE', 'SRZYL', " beca", 'wa-st', 'vDPtW', 'ghLZg', 'VDlbI', 'uJNLe', 'WacnE', 'QrxPG', 'tivat', 'VduLz', "ure\na", 'N:[', "o del", "the c", "\"retu", 'endin', 'updat', 'uxzHM', "en re", 'vcf', 'eJid', " by '", 'eTnrA', '=====', '@whis', 'type', 'ChHUj', 'AZSGN', 'DHbnC', 'CKWLU', 'nseTy', 'floor', 'uvPZc', 'XFdGb', "er an", 'rk/zo', 'url', "no pe", 'roadc', 'qxZlC', 'check', 'bJZgf', 'xswmA', 'mMnZc', "e gro", 'PyEcv', 'PnJuL', "\n*KEE", 'mcgRJ', "ture ", 'Pendi', "ator ", 'wbnTd', " Is c", 'jMKNm', 'kCssp', 'Aucun', "tion ", "l you", 'nQiFB', 'ytbSR', 'tVcUM', 'UCRPk', 'dedTe', '200', "P USI", 'vocYQ', ":- ⌚\n", 'sCwBt', 'NQzhE', 'trato', 'GUqdx', 'esc:*', "the g", 'FBKDP', 'EdzhW', 'FtsPi', 'ayCJJ', 'CozvH', "\n====", 'IKVhr', 'NHVSD', 'HSOgY', 'iRVht', 'comma', "t Upd", "t the", '-form', 'KIMUi', 'WbScf', "ate a", 'PfifO', 'ayvjT', "mple ", "?*\n\nI", 'FVLND', 'oWNoq', 'turne', 'eVtCU', '*Ente', '.apk', 'EOzww', 'uVwWk', 'mfVfV', 'JKulk', 'htMkR', 'ngUpd', 'cYEzA', 'n/vnd', 'ctiva', "n to ", 'muHnE', 'RjdAZ', 'IUDZL', 'xtMes', 'PUzRS', "type ", 'vmiUD', 'downl', "er th", 'GIOfv', "s\nor ", 'VcSxn', 'terva', 'MlvXW', "e com", "to lu", " APK🪄", 'xJjKc', "*\n\n*N", 'gpp', 'teaUC', '0-9a-', "link ", 'nqFmn', '__pro', 'iYjqz', 'pants', 'VRgxv', 'yZcOp', 'WjYzw', "out n", 'SKKqb', 'xoHLH', 'Wzfkr', 'xSBpY', 'fYGEK', 'PvfRZ', '🙅', 'bFDJp', 'xtHjf', 'kRHjE', 'ghts.', 'n/del', 'del', 'veuoz', 'nings', " feat", 'YOrix', 'zxvmb', 'qESVX', "e :* ", 'EqxEd', 'fHShp', " \n\n\nC", 'ylJtM', ":30\n ", 'ile/e', "L mom", 'JzAxr', "bot w", "t ent", 'debu', 'xlsNB', 'YxcYd', 'nzWIs', 'TUIEv', 'JGIWt', 'ZFThp', " sent", 'crJNf', "all o", 'HWCjR', 'yXLMc', 'nomCo', 'BBgRs', 'xuJxz', '3376278dmMSCg', " have", 'slice', 'p.com', "pply ", 'reque', 'whHUh', ':VCAR', 'nRTzx', 'CTWSQ', '$]*)', "o my ", 'gEXaO', "ute h", 'JbaeE', 'PHoDV', 'Jhuhs', 'trans', 'open', 'vsrhX', 'MrOEA'];
  _0x1edb = function () {
    return _0x4e146d;
  };
  return _0x1edb();
}
const _0x457b05 = {
  nomCom: "disap7",
  categorie: "Group",
  reaction: '👀'
};
zokou(_0x457b05, async (_0x2de2b0, _0xeeedb2, _0x52cdfd) => {
  const {
    ms: _0x52fa74,
    repondre: _0x3661ec,
    arg: _0x19fc51,
    verifGroupe: _0x3455f9,
    nomGroupe: _0x58f21f,
    infosGroupe: _0x46407f,
    nomAuteurMessage: _0x31d886,
    verifAdmin: _0x423b22,
    superUser: _0x27f103
  } = _0x52cdfd;
  if (!_0x3455f9) {
    _0x3661ec("This command works in groups only");
    return;
  }
  ;
  if (!_0x423b22) {
    _0x3661ec("You are not an admin here!");
    return;
  }
  ;
  await _0xeeedb2.groupToggleEphemeral(_0x2de2b0, 604800);
  _0x2de2b0("Dissapearing messages successfully turned on for 7 days!");
});
function _0x5052(_0x3fc47b, _0x228df6) {
  const _0x5d4bd6 = _0x1edb();
  _0x5052 = function (_0x55d67e, _0x4b560a) {
    _0x55d67e = _0x55d67e - 301;
    let _0x396724 = _0x5d4bd6[_0x55d67e];
    return _0x396724;
  };
  return _0x5052(_0x3fc47b, _0x228df6);
}
const _0x5591f1 = {
  nomCom: "disap1",
  categorie: "Group",
  reaction: '👀'
};
zokou(_0x5591f1, async (_0xdc1153, _0x518e33, _0x47ef03) => {
  const {
    ms: _0x47be82,
    repondre: _0x1ac57a,
    arg: _0xa619e6,
    verifGroupe: _0x93a37d,
    nomGroupe: _0x2fd842,
    infosGroupe: _0x3ab2d6,
    nomAuteurMessage: _0x2863e2,
    verifAdmin: _0x4d8c5b,
    superUser: _0x4f9c3d
  } = _0x47ef03;
  if (!_0x93a37d) {
    _0x1ac57a("This command works in groups only");
    return;
  }
  ;
  if (!_0x4d8c5b) {
    _0x1ac57a("You are not an admin here!");
    return;
  }
  ;
  await _0x518e33.groupToggleEphemeral(_0xdc1153, 86400);
  _0xdc1153("Dissapearing messages successfully turned on for 24 hours");
});
const _0x2b9aa = {
  nomCom: "approve",
  categorie: "Group"
};
function _0x63032a(_0x19bd39, _0x3e977d, _0x1aacb8, _0x2e5888, _0x2be38c) {
  return _0x5052(_0x2be38c + 0x1dc, _0x19bd39);
}
_0x2b9aa.reaction = "✔️ ";
zokou(_0x2b9aa, async (_0x2d7d61, _0x4d985a, _0x2629a1) => {
  const {
    ms: _0x23cb2b,
    repondre: _0x1a9ebb,
    arg: _0x3aeed7,
    verifGroupe: _0x579c6b,
    nomGroupe: _0x2d82cd,
    infosGroupe: _0x494a10,
    nomAuteurMessage: _0x20f10e,
    verifAdmin: _0x1c6b14,
    superUser: _0x526500
  } = _0x2629a1;
  if (!_0x579c6b) {
    _0x1a9ebb("This command works in groups only");
    return;
  }
  ;
  if (!_0x1c6b14) {
    _0x1a9ebb("You are not an admin here!");
    return;
  }
  ;
  const _0xa611cb = await _0x4d985a.groupRequestParticipantsList(_0x2d7d61);
  if (_0xa611cb.length === 0) {
    return _0x1a9ebb("there are no pending join requests.");
  }
  for (const _0x5320e7 of _0xa611cb) {
    const _0x521b87 = await _0x4d985a.groupRequestParticipantsUpdate(_0x2d7d61, [_0x5320e7.jid], "approve");
    console.log(_0x521b87);
  }
  _0x1a9ebb("all pending participants have been approved to join.");
});
const _0x379c78 = {
  nomCom: "vcf"
};
function _0x53f80b(_0x146fe4, _0x95a914, _0x49a077, _0x23cfd1, _0x2b6e2f) {
  return _0x5052(_0x146fe4 + 0x3ab, _0x95a914);
}
_0x379c78.categorie = "Group";
_0x379c78.reaction = '🎉';
zokou(_0x379c78, async (_0x3baf7f, _0x17149c, _0x4260da) => {
  const {
    ms: _0x5edd9b,
    repondre: _0x13037d,
    arg: _0x1c37f0,
    verifGroupe: _0x46bf94,
    nomGroupe: _0x1b8fa,
    infosGroupe: _0x1be156,
    nomAuteurMessage: _0x5be21b,
    verifAdmin: _0x443ff6,
    superUser: _0x9c0063
  } = _0x4260da;
  if (!_0x443ff6) {
    _0x13037d("You are not an admin here!");
    return;
  }
  ;
  if (!_0x46bf94) {
    _0x13037d("This command works in groups only");
    return;
  }
  ;
  let _0x45160b = await _0x17149c.groupMetadata(_0x3baf7f);
  let _0x59fece = "(^_-)Lucha";
  let _0x820229 = 0;
  for (let _0x31a62a of _0x45160b.participants) {
    _0x59fece += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x820229++ + "] +" + _0x31a62a.id.split('@')[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x31a62a.id.split('@')[0] + ':+' + _0x31a62a.id.split('@')[0] + "\nEND:VCARD\n";
  }
  await _0x13037d("L moment, *VAR_KITAA* Is compiling " + _0x45160b.participants.length + " contacts into a vcf...");
  await fs.writeFileSync("./contacts.vcf", _0x59fece.trim());
  const _0xa2fcdf = {
    ephemeralExpiration: 0x15180,
    quoted: _0x5edd9b
  };
  await _0x17149c.sendMessage(_0x3baf7f, {
    'document': fs.readFileSync("./contacts.vcf"),
    'mimetype': "text/vcard",
    'fileName': '' + _0x45160b.subject + ".Vcf",
    'caption': "VCF for " + _0x45160b.subject + "\nTotal Contacts: " + _0x45160b.participants.length + "\n*KEEP USING VAR_KITAA*"
  }, _0xa2fcdf);
  fs.unlinkSync("./contacts.vcf");
});
const _0x5c876c = {
  nomCom: "tagall",
  categorie: "Group",
  reaction: '📣'
};
zokou(_0x5c876c, async (_0x44f024, _0x1cab2d, _0x3c52df) => {
  const {
    ms: _0x25c89b,
    repondre: _0x5a9fa4,
    arg: _0x4213b9,
    verifGroupe: _0x501079,
    nomGroupe: _0x4181bc,
    infosGroupe: _0x2701b8,
    nomAuteurMessage: _0x57859d,
    verifAdmin: _0x8f432a,
    superUser: _0x4f3834
  } = _0x3c52df;
  if (!_0x501079) {
    _0x5a9fa4("☝️ ☝️this command works in groups only idiot❌");
    return;
  }
  if (!_0x4213b9 || _0x4213b9 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x4213b9.join(" ");
  }
  ;
  let _0xe69915 = _0x501079 ? await _0x2701b8.participants : '';
  var _0x1eb042 = '';
  _0x1eb042 += "========================\n  \n        🪄 *VAR_KITAA* 🪄\n========================\n\n👥 Group : " + _0x4181bc + " 🚀 \n🫂 Author : *" + _0x57859d + "* 👌 \n📃 Message : *" + mess + "* 📑\n========================\n\n\n\n\n";
  let _0x4ee451 = ['🦴', '👀', "🥱", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🤝", '⛔️', '$', '😟', '🥵', '🐯'];
  let _0x23db49 = Math.floor(Math.random() * (_0x4ee451.length - 1));
  for (const _0x12fdcd of _0xe69915) {
    _0x1eb042 += _0x4ee451[_0x23db49] + "      @" + _0x12fdcd.id.split('@')[0] + "\n";
  }
  if (_0x8f432a || _0x4f3834) {
    const _0x4d0ca2 = {
      quoted: _0x25c89b
    };
    _0x1cab2d.sendMessage(_0x44f024, {
      'text': _0x1eb042,
      'mentions': _0xe69915.map(_0x1420fc => _0x1420fc.id)
    }, _0x4d0ca2);
  } else {
    _0x5a9fa4("command reserved for admins");
  }
});
const _0x5744a2 = {
  nomCom: "invite",
  categorie: "Group",
  reaction: '🙋'
};
zokou(_0x5744a2, async (_0x3d1c90, _0xdc68da, _0x2a08d1) => {
  const {
    repondre: _0x53820a,
    nomGroupe: _0x5a3c11,
    nomAuteurMessage: _0xbea7fb,
    verifGroupe: _0x5027a4
  } = _0x2a08d1;
  if (!_0x5027a4) {
    _0x53820a("wait bro , you want the link to my dm?");
    return;
  }
  ;
  var _0x49fd0f = await _0xdc68da.groupInviteCode(_0x3d1c90);
  var _0x445234 = "https://chat.whatsapp.com/" + _0x49fd0f;
  let _0x15ea10 = "Hello " + _0xbea7fb + " , here is the group link of " + _0x5a3c11 + " \n\n\nClick Here To Join :" + _0x445234;
  _0x53820a(_0x15ea10);
});
const _0x56ecaa = {
  nomCom: "promote",
  categorie: "Group",
  reaction: "🙅"
};
zokou(_0x56ecaa, async (_0x40986c, _0x2c8667, _0x43c8cc) => {
  let {
    repondre: _0x4d3279,
    msgRepondu: _0xb37fc7,
    infosGroupe: _0x187406,
    auteurMsgRepondu: _0x2766e9,
    verifGroupe: _0x1b5c7f,
    auteurMessage: _0x55d357,
    superUser: _0x1636fe,
    idBot: _0x488708
  } = _0x43c8cc;
  let _0x585669 = _0x1b5c7f ? await _0x187406.participants : '';
  if (!_0x1b5c7f) {
    return _0x4d3279("For groups only");
  }
  const _0x5c696e = _0x1de1c5 => {
    for (const _0x5debde of _0x585669) {
      if (_0x5debde.id !== _0x1de1c5) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x569447 = _0x21b202 => {
    let _0x49150c = [];
    for (m of _0x21b202) {
      if (m.admin == null) {
        continue;
      }
      _0x49150c.push(m.id);
    }
    return _0x49150c;
  };
  const _0xf532f7 = _0x1b5c7f ? _0x569447(_0x585669) : '';
  let _0x5d7bb7 = _0x1b5c7f ? _0xf532f7.includes(_0x2766e9) : false;
  let _0x528573 = _0x5c696e(_0x2766e9);
  let _0x35a277 = _0x1b5c7f ? _0xf532f7.includes(_0x55d357) : false;
  zkad = _0x1b5c7f ? _0xf532f7.includes(_0x488708) : false;
  try {
    if (_0x35a277 || _0x1636fe) {
      if (_0xb37fc7) {
        if (zkad) {
          if (_0x528573) {
            if (_0x5d7bb7 == false) {
              var _0x144903 = "🥳🎗️  @" + _0x2766e9.split('@')[0] + " Has been promoted as a group Admin.";
              await _0x2c8667.groupParticipantsUpdate(_0x40986c, [_0x2766e9], "promote");
              const _0xfa344f = {
                text: _0x144903,
                mentions: [_0x2766e9]
              };
              _0x2c8667.sendMessage(_0x40986c, _0xfa344f);
            } else {
              return _0x4d3279("This member is already an administrator of the group.");
            }
          } else {
            return _0x4d3279("This user is not part of the group.");
          }
        } else {
          return _0x4d3279("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x4d3279("please tag the member to be nominated");
      }
    } else {
      return _0x4d3279("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x1a7f71) {
    _0x4d3279("oups " + _0x1a7f71);
  }
});
const _0xd9c516 = {
  nomCom: "demote",
  categorie: "Group",
  reaction: "🙅"
};
zokou(_0xd9c516, async (_0x1b6f02, _0x55c491, _0x49fbd6) => {
  let {
    repondre: _0x51424e,
    msgRepondu: _0x4c94ef,
    infosGroupe: _0x1531be,
    auteurMsgRepondu: _0x5a188d,
    verifGroupe: _0x36c19c,
    auteurMessage: _0x3d48f7,
    superUser: _0x426c4b,
    idBot: _0x59020b
  } = _0x49fbd6;
  let _0x192435 = _0x36c19c ? await _0x1531be.participants : '';
  if (!_0x36c19c) {
    return _0x51424e("For groups only");
  }
  const _0x1c7906 = _0xa47e3e => {
    for (const _0x23c991 of _0x192435) {
      if (_0x23c991.id !== _0xa47e3e) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x4d74cc = _0x22eace => {
    let _0x57df50 = [];
    for (m of _0x22eace) {
      if (m.admin == null) {
        continue;
      }
      _0x57df50.push(m.id);
    }
    return _0x57df50;
  };
  const _0x7424b3 = _0x36c19c ? _0x4d74cc(_0x192435) : '';
  let _0x523e37 = _0x36c19c ? _0x7424b3.includes(_0x5a188d) : false;
  let _0x4024a0 = _0x1c7906(_0x5a188d);
  let _0x1e01dd = _0x36c19c ? _0x7424b3.includes(_0x3d48f7) : false;
  zkad = _0x36c19c ? _0x7424b3.includes(_0x59020b) : false;
  try {
    if (_0x1e01dd || _0x426c4b) {
      if (_0x4c94ef) {
        if (zkad) {
          if (_0x4024a0) {
            if (_0x523e37 == false) {
              _0x51424e("This member is not a group administrator.");
            } else {
              var _0x304d1c = '@' + _0x5a188d.split('@')[0] + " was removed from his position as a group administrator\n";
              await _0x55c491.groupParticipantsUpdate(_0x1b6f02, [_0x5a188d], "demote");
              const _0xe86dc7 = {
                text: _0x304d1c,
                mentions: [_0x5a188d]
              };
              _0x55c491.sendMessage(_0x1b6f02, _0xe86dc7);
            }
          } else {
            return _0x51424e("This user is not part of the group.");
          }
        } else {
          return _0x51424e("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x51424e("please tag the member to be removed");
      }
    } else {
      return _0x51424e("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x2eaaef) {
    _0x51424e("oups " + _0x2eaaef);
  }
});
const _0x3e0b23 = {
  nomCom: "remove",
  categorie: "Group",
  reaction: "🙅"
};
zokou(_0x3e0b23, async (_0x17856a, _0x5748db, _0x5d1199) => {
  let {
    repondre: _0x176339,
    msgRepondu: _0xcd5d4b,
    infosGroupe: _0x319dd8,
    auteurMsgRepondu: _0x3fa7b9,
    verifGroupe: _0x232a1e,
    nomAuteurMessage: _0x290b40,
    auteurMessage: _0x43a249,
    superUser: _0x59c452,
    idBot: _0x5352c7
  } = _0x5d1199;
  let _0x3527ae = _0x232a1e ? await _0x319dd8.participants : '';
  if (!_0x232a1e) {
    return _0x176339("for groups only");
  }
  const _0x5ba5bd = _0x1a6f27 => {
    for (const _0x1fbaff of _0x3527ae) {
      if (_0x1fbaff.id !== _0x1a6f27) {
        continue;
      } else {
        true;
        return true;
      }
    }
  };
  const _0x19122f = _0x39dbce => {
    let _0x1b0be4 = [];
    for (m of _0x39dbce) {
      if (m.admin == null) {
        continue;
      }
      _0x1b0be4.push(m.id);
    }
    return _0x1b0be4;
  };
  const _0x5b402e = _0x232a1e ? _0x19122f(_0x3527ae) : '';
  let _0x4df50f = _0x232a1e ? _0x5b402e.includes(_0x3fa7b9) : false;
  let _0x32df1a = _0x5ba5bd(_0x3fa7b9);
  let _0x4030eb = _0x232a1e ? _0x5b402e.includes(_0x43a249) : false;
  zkad = _0x232a1e ? _0x5b402e.includes(_0x5352c7) : false;
  try {
    if (_0x4030eb || _0x59c452) {
      if (_0xcd5d4b) {
        if (zkad) {
          if (_0x32df1a) {
            if (_0x4df50f == false) {
              var _0x3f27fc = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokoy_MD/main/media/remover.gif", {
                'pack': "VAR_KITAA",
                'author': _0x290b40,
                'type': StickerTypes.FULL,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x32,
                'background': "#000000"
              });
              await _0x3f27fc.toFile("st.webp");
              var _0x446513 = '@' + _0x3fa7b9.split('@')[0] + " was removed from the group.\n";
              await _0x5748db.groupParticipantsUpdate(_0x17856a, [_0x3fa7b9], "remove");
              const _0x22b2ba = {
                text: _0x446513,
                mentions: [_0x3fa7b9]
              };
              _0x5748db.sendMessage(_0x17856a, _0x22b2ba);
            } else {
              _0x176339("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0x176339("This user is not part of the group.");
          }
        } else {
          return _0x176339("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x176339("please tag the member to be removed");
      }
    } else {
      return _0x176339("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0x5cf907) {
    _0x176339("oups " + _0x5cf907);
  }
});
const _0x2ba626 = {
  nomCom: "add",
  categorie: "Group",
  reaction: "🙅"
};
function _0x3fe4c0(_0x25d53f, _0x251d1b, _0x3b55a6, _0x77bc8e, _0x44ea80) {
  return _0x5052(_0x77bc8e - 0xb8, _0x3b55a6);
}
zokou(_0x2ba626, async (_0x343c07, _0x283128, _0x13f6f7) => {
  let {
    repondre: _0x39b608,
    msgRepondu: _0x48c034,
    infosGroupe: _0xb0bbcf,
    auteurMsgRepondu: _0xa43df3,
    verifGroupe: _0x210609,
    nomAuteurMessage: _0x4e3f64,
    auteurMessage: _0x3a74f4,
    superUser: _0x125d7f,
    idBot: _0x5b5edc
  } = _0x13f6f7;
  if (!_0x210609) {
    return _0x39b608("for groups only");
  }
  const _0x2a97f2 = await message.groupMetadata(message.jid);
  const _0x228649 = await isAdmin(_0x2a97f2, message.client.user.jid);
  if (!_0x228649) {
    return await message.send("_I'm not admin._");
  }
  match = match || message.reply_message.jid;
  if (!match) {
    return await message.send("Example : add 255693629079");
  }
  match = jidToNum(match);
  const _0x1c37f9 = await message.Add(match);
  if (_0x1c37f9 == "403") {
    return await message.send("_Failed, Invite sent_");
  } else {
    if (_0x1c37f9 && _0x1c37f9 != "200") {
      return await message.send(_0x1c37f9, {
        'quoted': message.data
      });
    }
  }
});
const _0xc18d2a = {
  nomCom: "del",
  categorie: "User",
  reaction: '🧹'
};
zokou(_0xc18d2a, async (_0x50ea01, _0x544a50, _0x24c5be) => {
  const {
    ms: _0x326ed6,
    repondre: _0x5ae628,
    verifGroupe: _0x2d758d,
    auteurMsgRepondu: _0x488409,
    idBot: _0xfb4c15,
    msgRepondu: _0x8dbb53,
    verifAdmin: _0x6a97d4,
    superUser: _0x453be1
  } = _0x24c5be;
  if (!_0x8dbb53) {
    _0x5ae628("Please mention the message to delete.");
    return;
  }
  if (_0x453be1 && _0x488409 == _0xfb4c15) {
    if (_0x488409 == _0xfb4c15) {
      const _0x14b3a8 = {
        remoteJid: _0x50ea01,
        fromMe: true,
        id: _0x326ed6.message.extendedTextMessage.contextInfo.stanzaId
      };
      const _0x2feaad = {
        "delete": _0x14b3a8
      };
      await _0x544a50.sendMessage(_0x50ea01, _0x2feaad);
      return;
    }
  }
  if (_0x2d758d) {
    if (_0x6a97d4 || _0x453be1) {
      try {
        const _0x1b5d7c = {
          remoteJid: _0x50ea01,
          id: _0x326ed6.message.extendedTextMessage.contextInfo.stanzaId,
          fromMe: false,
          participant: _0x326ed6.message.extendedTextMessage.contextInfo.participant
        };
        const _0x23610c = {
          "delete": _0x1b5d7c
        };
        await _0x544a50.sendMessage(_0x50ea01, _0x23610c);
        return;
      } catch (_0x277fb5) {
        _0x5ae628("I need admin rights.");
      }
    } else {
      _0x5ae628("Sorry, you are not an administrator of the group.");
    }
  }
});
const _0x1d366c = {
  nomCom: "info",
  categorie: "Group"
};
zokou(_0x1d366c, async (_0x8fc262, _0x21e728, _0x4c44b5) => {
  const {
    ms: _0x53260b,
    repondre: _0x1b704e,
    verifGroupe: _0x26afe2
  } = _0x4c44b5;
  if (!_0x26afe2) {
    _0x1b704e("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0x21e728.profilePictureUrl(_0x8fc262, "image");
  } catch {
    ppgroup = conf.IMAGE_MENU;
  }
  const _0x529c6e = await _0x21e728.groupMetadata(_0x8fc262);
  const _0x440a99 = {
    url: ppgroup
  };
  let _0x25fb49 = {
    'image': _0x440a99,
    'caption': "*━━══『GROUP INFO』═━━━*\n\n*🕯️Name:* " + _0x529c6e.subject + "\n\n*🕯️Group's ID:* " + _0x8fc262 + "\n\n*🔍Desc:* \n\n" + _0x529c6e.desc
  };
  const _0x21e952 = {
    quoted: _0x53260b
  };
  _0x21e728.sendMessage(_0x8fc262, _0x25fb49, _0x21e952);
});
const _0x2d9e87 = {
  nomCom: "antilink",
  categorie: "Group",
  reaction: '🔗'
};
zokou(_0x2d9e87, async (_0x589234, _0x1daab6, _0x2698e6) => {
  var {
    repondre: _0x5ee2de,
    arg: _0x105609,
    verifGroupe: _0x4feded,
    superUser: _0x371cc6,
    verifAdmin: _0x2aaeca
  } = _0x2698e6;
  if (!_0x4feded) {
    return _0x5ee2de("*This Command works in Groups Only*");
  }
  if (_0x371cc6 || _0x2aaeca) {
    const _0x49be46 = await verifierEtatJid(_0x589234);
    try {
      if (!_0x105609 || !_0x105609[0] || _0x105609 === " ") {
        _0x5ee2de("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x105609[0] === 'on') {
        if (_0x49be46) {
          _0x5ee2de("the antilink is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x589234, "oui");
          _0x5ee2de("the antilink is activated successfully");
        }
      } else {
        if (_0x105609[0] === "off") {
          if (_0x49be46) {
            await ajouterOuMettreAJourJid(_0x589234, "non");
            _0x5ee2de("The antilink has been successfully deactivated");
          } else {
            _0x5ee2de("antilink is not activated for this group");
          }
        } else {
          if (_0x105609.join('').split('/')[0] === "action") {
            let _0x26d958 = _0x105609.join('').split('/')[1].toLowerCase();
            if (_0x26d958 == "remove" || _0x26d958 == "warn" || _0x26d958 == "delete") {
              await mettreAJourAction(_0x589234, _0x26d958);
              _0x5ee2de("The anti-link action has been updated to " + _0x105609.join('').split('/')[1]);
            } else {
              _0x5ee2de("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x5ee2de("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0xe56948) {
      _0x5ee2de(_0xe56948);
    }
  } else {
    _0x5ee2de("You are not entitled to this order");
  }
});
const _0x87d0b1 = {
  nomCom: "antibot",
  categorie: "Group",
  reaction: '🔗'
};
zokou(_0x87d0b1, async (_0x5bb2bf, _0x1aa725, _0x3d8f7d) => {
  var {
    repondre: _0x9d9d11,
    arg: _0xd7e380,
    verifGroupe: _0x161c55,
    superUser: _0x4a2c00,
    verifAdmin: _0x4b2ac4
  } = _0x3d8f7d;
  if (!_0x161c55) {
    return _0x9d9d11("*for groups only*");
  }
  if (_0x4a2c00 || _0x4b2ac4) {
    const _0x144b88 = await atbverifierEtatJid(_0x5bb2bf);
    try {
      if (!_0xd7e380 || !_0xd7e380[0] || _0xd7e380 === " ") {
        _0x9d9d11("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0xd7e380[0] === 'on') {
        if (_0x144b88) {
          _0x9d9d11("the antibot is already activated for this group");
        } else {
          await atbajouterOuMettreAJourJid(_0x5bb2bf, "oui");
          _0x9d9d11("the antibot is successfully activated");
        }
      } else {
        if (_0xd7e380[0] === "off") {
          if (_0x144b88) {
            await atbajouterOuMettreAJourJid(_0x5bb2bf, "non");
            _0x9d9d11("The antibot has been successfully deactivated");
          } else {
            _0x9d9d11("antibot is not activated for this group");
          }
        } else {
          if (_0xd7e380.join('').split('/')[0] === "action") {
            let _0x1e5e7d = _0xd7e380.join('').split('/')[1].toLowerCase();
            if (_0x1e5e7d == "remove" || _0x1e5e7d == "warn" || _0x1e5e7d == "delete") {
              await mettreAJourAction(_0x5bb2bf, _0x1e5e7d);
              _0x9d9d11("The anti-bot action has been updated to " + _0xd7e380.join('').split('/')[1]);
            } else {
              _0x9d9d11("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x9d9d11("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x495209) {
      _0x9d9d11(_0x495209);
    }
  } else {
    _0x9d9d11("You are not entitled to this order");
  }
});
const _0x4ef9aa = {
  nomCom: "group",
  categorie: "Group"
};
zokou(_0x4ef9aa, async (_0x5e81d6, _0x2f8583, _0xcf2130) => {
  const {
    repondre: _0x2de2f5,
    verifGroupe: _0x43f474,
    verifAdmin: _0x3287fe,
    superUser: _0x2c4341,
    arg: _0x2e230d
  } = _0xcf2130;
  if (!_0x43f474) {
    _0x2de2f5("order reserved for group only");
    return;
  }
  ;
  if (_0x2c4341 || _0x3287fe) {
    if (!_0x2e230d[0]) {
      _0x2de2f5("Instructions:\n\nType group open or close");
      return;
    }
    const _0x1a8811 = _0x2e230d.join(" ");
    switch (_0x1a8811) {
      case "open":
        await _0x2f8583.groupSettingUpdate(_0x5e81d6, "not_announcement");
        _0x2de2f5("Group opened successfully.\nNow Participants can send messages.");
        break;
      case "close":
        await _0x2f8583.groupSettingUpdate(_0x5e81d6, "announcement");
        _0x2de2f5("Group closed successfully");
        break;
      default:
        _0x2de2f5("Please don't invent an option");
    }
  } else {
    _0x2de2f5("This command is for admins only!");
    return;
  }
});
const _0x312ec0 = {
  nomCom: "gname",
  categorie: "Group"
};
zokou(_0x312ec0, async (_0x9c6251, _0x79777c, _0x479f90) => {
  const {
    arg: _0xd37e52,
    repondre: _0x585dbe,
    verifAdmin: _0x59bc03
  } = _0x479f90;
  if (!_0x59bc03) {
    _0x585dbe("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0xd37e52[0]) {
    _0x585dbe("Please enter the group name");
    return;
  }
  ;
  const _0x40a6fa = _0xd37e52.join(" ");
  await _0x79777c.groupUpdateSubject(_0x9c6251, _0x40a6fa);
  _0x585dbe("group name refresh: *" + _0x40a6fa + '*');
});
const _0x3294a2 = {
  nomCom: "gdesc",
  categorie: "Group"
};
zokou(_0x3294a2, async (_0x42054b, _0x56d5e3, _0x48f630) => {
  const {
    arg: _0xeea48,
    repondre: _0x3badea,
    verifAdmin: _0xa328e3
  } = _0x48f630;
  if (!_0xa328e3) {
    _0x3badea("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0xeea48[0]) {
    _0x3badea("Please enter the group description");
    return;
  }
  ;
  const _0x4bb31b = _0xeea48.join(" ");
  await _0x56d5e3.groupUpdateDescription(_0x42054b, _0x4bb31b);
  _0x3badea("group description update: *" + _0x4bb31b + '*');
});
const _0x36a570 = {
  nomCom: "revoke",
  categorie: "Group"
};
zokou(_0x36a570, async (_0x4bfa26, _0x3b69a7, _0x134744) => {
  const {
    arg: _0x9dd539,
    repondre: _0x199684,
    verifGroupe: _0x55b9f8,
    verifAdmin: _0xe30ddd
  } = _0x134744;
  if (!_0xe30ddd) {
    _0x199684("for admins.");
    return;
  }
  ;
  if (!_0x55b9f8) {
    _0x199684("This command is only allowed in groups.");
  }
  ;
  await _0x3b69a7.groupRevokeInvite(_0x4bfa26);
  _0x199684("group link revoked.");
});
const _0x1545d8 = {};
function _0x3fcda7(_0x1d50b2, _0x32c361, _0x5cf1b1, _0x5e2d2b, _0x4da647) {
  return _0x5052(_0x5e2d2b + 0x226, _0x4da647);
}
_0x1545d8.nomCom = "gpp";
_0x1545d8.categorie = "Group";
zokou(_0x1545d8, async (_0x516d0c, _0x1e4ee8, _0x57ff5e) => {
  const {
    repondre: _0x329649,
    msgRepondu: _0x44e09c,
    verifAdmin: _0x3d5506
  } = _0x57ff5e;
  if (!_0x3d5506) {
    _0x329649("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x44e09c.imageMessage) {
    const _0x5f25fb = await _0x1e4ee8.downloadAndSaveMediaMessage(_0x44e09c.imageMessage);
    const _0xab4779 = {
      url: _0x5f25fb
    };
    const _0xb2c98c = {
      text: err
    };
    await _0x1e4ee8.updateProfilePicture(_0x516d0c, _0xab4779).then(() => {
      const _0x4628c2 = {
        text: "Group pfp changed"
      };
      _0x1e4ee8.sendMessage(_0x516d0c, _0x4628c2);
      fs.unlinkSync(_0x5f25fb);
    })["catch"](() => _0x1e4ee8.sendMessage(_0x516d0c, _0xb2c98c));
  } else {
    _0x329649("Please mention an image");
  }
});
const _0x59e5e0 = {
  nomCom: "hidetag",
  categorie: "Group",
  reaction: '🎤'
};
function _0x1e916b(_0x3c1712, _0x46e7d4, _0x39493e, _0x2e4ec8, _0x5f40c5) {
  return _0x5052(_0x2e4ec8 + 0x38a, _0x3c1712);
}
zokou(_0x59e5e0, async (_0x3c6e51, _0x3d8b2d, _0xc153f) => {
  const {
    repondre: _0x25b009,
    msgRepondu: _0x485f3,
    verifGroupe: _0x424623,
    arg: _0x103ea1,
    verifAdmin: _0x123ec3,
    superUser: _0x4ad1a5
  } = _0xc153f;
  if (!_0x424623) {
    _0x25b009("This command is only allowed in groups.");
  }
  ;
  if (_0x123ec3 || _0x4ad1a5) {
    let _0x1ad9c0 = await _0x3d8b2d.groupMetadata(_0x3c6e51);
    let _0x18bbcf = [];
    for (const _0x15e31e of _0x1ad9c0.participants) {
      _0x18bbcf.push(_0x15e31e.id);
    }
    if (_0x485f3) {
      console.log(_0x485f3);
      let _0x935c03;
      if (_0x485f3.imageMessage) {
        let _0x3fdb74 = await _0x3d8b2d.downloadAndSaveMediaMessage(_0x485f3.imageMessage);
        const _0x2befd1 = {
          url: _0x3fdb74
        };
        const _0x587824 = {
          image: _0x2befd1,
          caption: _0x485f3.imageMessage.caption,
          mentions: _0x18bbcf
        };
        _0x935c03 = _0x587824;
      } else {
        if (_0x485f3.videoMessage) {
          let _0x1c50df = await _0x3d8b2d.downloadAndSaveMediaMessage(_0x485f3.videoMessage);
          const _0x969bd = {
            url: _0x1c50df
          };
          const _0x499bff = {
            video: _0x969bd,
            caption: _0x485f3.videoMessage.caption,
            mentions: _0x18bbcf
          };
          _0x935c03 = _0x499bff;
        } else {
          if (_0x485f3.audioMessage) {
            let _0x27b0e2 = await _0x3d8b2d.downloadAndSaveMediaMessage(_0x485f3.audioMessage);
            const _0xda3c53 = {
              url: _0x27b0e2
            };
            const _0x3572e5 = {
              audio: _0xda3c53,
              mimetype: "audio/mp4",
              mentions: _0x18bbcf
            };
            _0x935c03 = _0x3572e5;
          } else {
            if (_0x485f3.stickerMessage) {
              let _0x1346af = await _0x3d8b2d.downloadAndSaveMediaMessage(_0x485f3.stickerMessage);
              const _0x3c3524 = {
                pack: "VAR_KITAA-tag",
                type: StickerTypes.CROPPED,
                categories: ['🤩', '🎉'],
                id: "12345",
                quality: 0x46,
                background: "transparent"
              };
              let _0x19d8df = new Sticker(_0x1346af, _0x3c3524);
              const _0x4894df = await _0x19d8df.toBuffer();
              const _0x21bf64 = {
                sticker: _0x4894df,
                mentions: _0x18bbcf
              };
              _0x935c03 = _0x21bf64;
            } else {
              const _0x50438f = {
                text: _0x485f3.conversation,
                mentions: _0x18bbcf
              };
              _0x935c03 = _0x50438f;
            }
          }
        }
      }
      _0x3d8b2d.sendMessage(_0x3c6e51, _0x935c03);
    } else {
      if (!_0x103ea1 || !_0x103ea1[0]) {
        _0x25b009("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x3d8b2d.sendMessage(_0x3c6e51, {
        'text': _0x103ea1.join(" "),
        'mentions': _0x18bbcf
      });
    }
  } else {
    _0x25b009("Command reserved for administrators.");
  }
});
const _0x1320da = {
  nomCom: "apk",
  reaction: '✨',
  categorie: "Download"
};
zokou(_0x1320da, async (_0x55d574, _0x3c1a69, _0x322288) => {
  const {
    repondre: _0x37eb2d,
    arg: _0x4a2b30,
    ms: _0x173223
  } = _0x322288;
  try {
    const _0x5311f6 = _0x4a2b30.join(" ");
    if (!_0x5311f6) {
      return _0x37eb2d("*Enter the name of the application to search for*");
    }
    const _0x1f5a78 = await search(_0x5311f6);
    if (_0x1f5a78.length === 0) {
      return _0x37eb2d("*can't find application, please enter another name*");
    }
    const _0x25195d = await download(_0x1f5a78[0].id);
    const _0xb311c0 = parseInt(_0x25195d.size);
    if (_0xb311c0 > 300) {
      return _0x37eb2d("The file exceeds 300 MB, unable to download.");
    }
    const _0x175f03 = _0x25195d.dllink;
    const _0x2074b1 = "*VAR_KITAA APK🪄*\n\n*Name :* " + _0x25195d.name + "\n*Id :* " + _0x25195d["package"] + "\n*Last Update :* " + _0x25195d.lastup + "\n*Size :* " + _0x25195d.size + "\n";
    const _0x3d3682 = (_0x25195d?.["name"] || "Downloader") + ".apk";
    const _0x201b47 = {
      responseType: "stream"
    };
    const _0x52e14c = await axios.get(_0x175f03, _0x201b47);
    const _0x2e6476 = fs.createWriteStream(_0x3d3682);
    _0x52e14c.data.pipe(_0x2e6476);
    await new Promise((_0x38dcc1, _0x176f59) => {
      _0x2e6476.on("finish", _0x38dcc1);
      _0x2e6476.on("error", _0x176f59);
    });
    const _0x135556 = {
      'document': fs.readFileSync(_0x3d3682),
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x3d3682
    };
    const _0x24fb67 = {
      url: _0x25195d.icon
    };
    const _0x1fe354 = {
      image: _0x24fb67,
      caption: _0x2074b1
    };
    const _0x4867ff = {
      quoted: _0x173223
    };
    _0x3c1a69.sendMessage(_0x55d574, _0x1fe354, _0x4867ff);
    const _0x533230 = {
      quoted: _0x173223
    };
    _0x3c1a69.sendMessage(_0x55d574, _0x135556, _0x533230);
    fs.unlinkSync(_0x3d3682);
  } catch (_0x553b8f) {
    console.error("Erreur lors du traitement de la commande apk:", _0x553b8f);
    _0x37eb2d("*Error during apk command processing*");
  }
});
const cron = require("../data/cron");
const _0x13dbc9 = {
  nomCom: "automute",
  categorie: "Group"
};
zokou(_0x13dbc9, async (_0x2c87d1, _0x43436c, _0xa2d696) => {
  const {
    arg: _0x3bb28e,
    repondre: _0x3df36e,
    verifAdmin: _0x2384a6
  } = _0xa2d696;
  if (!_0x2384a6) {
    _0x3df36e("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x2c87d1);
  if (!_0x3bb28e || _0x3bb28e.length == 0) {
    let _0x416c34;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x416c34 = "No time set for automatic mute";
    } else {
      _0x416c34 = "The group will be muted at " + group_cron.mute_at.split(':')[0] + " " + group_cron.mute_at.split(':')[1];
    }
    let _0x58c850 = "* *State:* " + _0x416c34 + "\n        * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'\n        Example automute 9:30\n        * To delete the automatic mute, use the command *automute del*";
    _0x3df36e(_0x58c850);
    return;
  } else {
    let _0x156eb2 = _0x3bb28e.join(" ");
    if (_0x156eb2.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x3df36e("No cronometrage is active");
      } else {
        await cron.delCron(_0x2c87d1);
        _0x3df36e("The automatic mute has been removed; restart to apply changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x156eb2.includes(':')) {
      await cron.addCron(_0x2c87d1, "mute_at", _0x156eb2);
      _0x3df36e("Setting up automatic mute for " + _0x156eb2 + " ; restart to apply changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x3df36e("Please enter a valid time with hour and minute separated by :");
    }
  }
});
const _0x2c2367 = {
  nomCom: "autounmute",
  categorie: "Group"
};
zokou(_0x2c2367, async (_0xa9800, _0x2d0725, _0x405941) => {
  const {
    arg: _0xa07c94,
    repondre: _0x3a5c3a,
    verifAdmin: _0x244b8f
  } = _0x405941;
  if (!_0x244b8f) {
    _0x3a5c3a("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0xa9800);
  if (!_0xa07c94 || _0xa07c94.length == 0) {
    let _0x2d3643;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x2d3643 = "No time set for autounmute";
    } else {
      _0x2d3643 = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0] + "H " + group_cron.unmute_at.split(':')[1];
    }
    let _0xe74333 = "* *State:* " + _0x2d3643 + "\n      * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n      Example autounmute 7:30\n      * To delete autounmute, use the command *autounmute del*";
    _0x3a5c3a(_0xe74333);
    return;
  } else {
    let _0x4642f0 = _0xa07c94.join(" ");
    if (_0x4642f0.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x3a5c3a("No cronometrage has been activated");
      } else {
        await cron.delCron(_0xa9800);
        _0x3a5c3a("The autounmute has been removed; restart to apply the changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x4642f0.includes(':')) {
      await cron.addCron(_0xa9800, "unmute_at", _0x4642f0);
      _0x3a5c3a("Setting up autounmute for " + _0x4642f0 + "; restart to apply the changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x3a5c3a("Please enter a valid time with hour and minute separated by :");
    }
  }
});
const _0x110a73 = {
  nomCom: "fkick",
  categorie: "Group"
};
zokou(_0x110a73, async (_0x318aa1, _0x18b8a3, _0x58a776) => {
  const {
    arg: _0x2a677c,
    repondre: _0x4b0f0e,
    verifAdmin: _0x2f9aec,
    superUser: _0x1dabba,
    verifZokouAdmin: _0x28411d
  } = _0x58a776;
  if (_0x2f9aec || _0x1dabba) {
    if (!_0x28411d) {
      _0x4b0f0e("You need administrative rights to perform this command");
      return;
    }
    if (!_0x2a677c || _0x2a677c.length == 0) {
      _0x4b0f0e("Please enter the country code whose members will be removed");
      return;
    }
    let _0x1cff6c = await _0x18b8a3.groupMetadata(_0x318aa1);
    let _0x28d1cd = _0x1cff6c.participants;
    for (let _0x1c9e52 = 0; _0x1c9e52 < _0x28d1cd.length; _0x1c9e52++) {
      if (_0x28d1cd[_0x1c9e52].id.startsWith(_0x2a677c[0]) && _0x28d1cd[_0x1c9e52].admin === null) {
        await _0x18b8a3.groupParticipantsUpdate(_0x318aa1, [_0x28d1cd[_0x1c9e52].id], "remove");
      }
    }
  } else {
    _0x4b0f0e("Sorry, you are not an administrator of the group");
  }
});
const _0x3e195a = {
  nomCom: "nsfw",
  categorie: "Group"
};
zokou(_0x3e195a, async (_0x33ea77, _0x18f111, _0x2a157b) => {
  const {
    arg: _0x2ae313,
    repondre: _0x29621e,
    verifAdmin: _0x50401c
  } = _0x2a157b;
  if (!_0x50401c) {
    _0x29621e("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x1eb670 = require("../data/hentai");
  let _0x1a435c = await _0x1eb670.checkFromHentaiList(_0x33ea77);
  if (_0x2ae313[0] == 'on') {
    if (_0x1a435c) {
      _0x29621e("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x1eb670.addToHentaiList(_0x33ea77);
    _0x29621e("NSFW content is now active for this group");
  } else {
    if (_0x2ae313[0] == "off") {
      if (!_0x1a435c) {
        _0x29621e("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x1eb670.removeFromHentaiList(_0x33ea77);
      _0x29621e("NSFW content is now disabled for this group");
    } else {
      _0x29621e("You must enter \"on\" or \"off\"");
    }
  }
});
const _0x4be79a = {
  nomCom: "antiword",
  categorie: "Group",
  reaction: '🔗'
};
zokou(_0x4be79a, async (_0x408409, _0x35c20c, _0x128461) => {
  var {
    repondre: _0x3e9c70,
    arg: _0x5b4c5b,
    verifGroupe: _0xf7f1b,
    superUser: _0x4f4fca,
    verifAdmin: _0x15cab2
  } = _0x128461;
  if (!_0xf7f1b) {
    return _0x3e9c70("*This command is for groups only*");
  }
  if (_0x4f4fca || _0x15cab2) {
    const _0x1e1140 = await verifierEtatJid(_0x408409);
    try {
      if (!_0x5b4c5b || !_0x5b4c5b[0] || _0x5b4c5b === " ") {
        _0x3e9c70("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
        return;
      }
      ;
      if (_0x5b4c5b[0] === 'on') {
        if (_0x1e1140) {
          _0x3e9c70("the antiword is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x408409, "oui");
          _0x3e9c70("the antiword is activated successfully");
        }
      } else {
        if (_0x5b4c5b[0] === "off") {
          if (_0x1e1140) {
            await ajouterOuMettreAJourJid(_0x408409, "non");
            _0x3e9c70("The antiword has been successfully deactivated");
          } else {
            _0x3e9c70("antiword is not activated for this group");
          }
        } else {
          if (_0x5b4c5b.join('').split('/')[0] === "action") {
            let _0x47c8a8 = _0x5b4c5b.join('').split('/')[1].toLowerCase();
            if (_0x47c8a8 == "remove" || _0x47c8a8 == "warn" || _0x47c8a8 == "delete") {
              await mettreAJourAction(_0x408409, _0x47c8a8);
              _0x3e9c70("The anti-word action has been updated to " + _0x5b4c5b.join('').split('/')[1]);
            } else {
              _0x3e9c70("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x3e9c70("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the word sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
          }
        }
      }
    } catch (_0x203441) {
      _0x3e9c70(_0x203441);
    }
  } else {
    _0x3e9c70("You are not entitled to this order");
  }
});
const _0x57b34f = {
  nomCom: "antilink-all",
  categorie: "Group",
  reaction: '🔗'
};
zokou(_0x57b34f, async (_0x5d80cf, _0x475906, _0x842b32) => {
  var {
    repondre: _0x4b9adf,
    arg: _0x58d8eb,
    verifGroupe: _0x5264dc,
    superUser: _0x2f8579,
    verifAdmin: _0x5412fe
  } = _0x842b32;
  if (!_0x5264dc) {
    return _0x4b9adf("*This Command works in Groups Only*");
  }
  if (_0x2f8579 || _0x5412fe) {
    const _0x5afb52 = await verifierEtatJid(_0x5d80cf);
    try {
      if (!_0x58d8eb || !_0x58d8eb[0] || _0x58d8eb === " ") {
        _0x4b9adf("type antilink-all on to activate the antilink-all feature\nor antilink-all off to deactivate the antilink-all feature\nThen antilink-all action/remove to directly remove the link without notice\nor antilink-all action/warn to give warnings\nor antilink-all action/delete to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.");
        return;
      }
      ;
      if (_0x58d8eb[0] === 'on') {
        if (_0x5afb52) {
          _0x4b9adf("antilink-all is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x5d80cf, "oui");
          _0x4b9adf("the antilink-all is activated successfully");
        }
      } else {
        if (_0x58d8eb[0] === "off") {
          if (_0x5afb52) {
            await ajouterOuMettreAJourJid(_0x5d80cf, "non");
            _0x4b9adf("The antilink-all has been successfully deactivated");
          } else {
            _0x4b9adf("antilink-all is not activated for this group");
          }
        } else {
          if (_0x58d8eb.join('').split('/')[0] === "action") {
            let _0x321da4 = _0x58d8eb.join('').split('/')[1].toLowerCase();
            if (_0x321da4 == "remove" || _0x321da4 == "warn" || _0x321da4 == "delete") {
              await mettreAJourAction(_0x5d80cf, _0x321da4);
              _0x4b9adf("The anti-link action has been updated to " + _0x58d8eb.join('').split('/')[1]);
            } else {
              _0x4b9adf("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x4b9adf("Look, type antilink-all on to activate the antilink-all feature\nor antilink-all off to deactivate the antilink-all feature\nor antilink-all action/remove to directly remove the link without notice\nor antilink-all action/warn to give warnings\nor antilink-all action/delete to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.\n\n*KEEP USING LUCKY_MD*");
          }
        }
      }
    } catch (_0x30abbb) {
      _0x4b9adf(_0x30abbb);
    }
  } else {
    _0x4b9adf("You are not allowed to use this command");
  }
});
(function () {
  const _0x2acef7 = function () {
    let _0x11122a;
    try {
      _0x11122a = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x53416a) {
      _0x11122a = window;
    }
    return _0x11122a;
  };
  const _0x292e04 = _0x2acef7();
  _0x292e04.setInterval(_0x3fc47b, 4000);
})();
function _0x3fc47b(_0x559b23) {
  function _0x23f15b(_0x57d923) {
    if (typeof _0x57d923 === "string") {
      return function (_0x12cd86) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x57d923 / _0x57d923).length !== 1 || _0x57d923 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x23f15b(++_0x57d923);
  }
  try {
    if (_0x559b23) {
      return _0x23f15b;
    } else {
      _0x23f15b(0);
    }
  } catch (_0xffe0f3) {}
}
