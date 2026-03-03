const { zokou } = require("../framework/zokou");
const fs = require('fs-extra');
const conf = require('../set');
const { default: axios } = require("axios");
const cheerio = require('cheerio'); // Add cheerio for HTML parsing

// ============================================
// APK DOWNLOADER - WORKING APIS (2025 UPDATE)
// ============================================

// Alternative working APIs
const APIS = {
  RAPIDAPI: {
    HOST: 'google-play-app-details.p.rapidapi.com',
    KEY: 'YOUR_RAPIDAPI_KEY' // Get free key from rapidapi.com
  },
  APKMIRROR: 'https://www.apkmirror.com',
  PLAYSTORE: 'https://play.google.com/store/apps/details'
};

/**
 * Search apps using PlayStore (working method)
 * @param {string} query - App name to search
 * @returns {Promise<Array>} - List of apps
 */
async function searchPlayStore(query) {
  try {
    // Using PlayStore search with web scraping
    const searchUrl = `https://play.google.com/store/search?q=${encodeURIComponent(query)}&c=apps`;
    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const apps = [];
    
    // Parse PlayStore search results
    $('.Vpfmgd').each((i, elem) => {
      if (i < 10) { // Limit to 10 results
        const name = $(elem).find('.DdYX5').text();
        const id = $(elem).find('a').attr('href')?.split('id=')[1]?.split('&')[0];
        const developer = $(elem).find('.wMUdtb').text();
        const icon = $(elem).find('.T75of').attr('src');
        
        if (name && id) {
          apps.push({
            name: name,
            id: id,
            developer: developer || 'Unknown',
            icon: icon || '',
            source: 'playstore'
          });
        }
      }
    });
    
    return apps;
  } catch (error) {
    console.error('PlayStore Search Error:', error);
    return [];
  }
}

/**
 * Get APK download link from ApkMirror
 * @param {string} appName - App name
 * @returns {Promise<string|null>} - Download URL
 */
async function getApkMirrorLink(appName) {
  try {
    // Search on ApkMirror
    const searchUrl = `https://www.apkmirror.com/?s=${encodeURIComponent(appName)}&post_type=app_release`;
    const searchRes = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(searchRes.data);
    const firstResult = $('.appRow').first();
    
    if (!firstResult.length) return null;
    
    const appUrl = firstResult.find('a').attr('href');
    if (!appUrl) return null;
    
    // Get download page
    const appPage = await axios.get(appUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $$ = cheerio.load(appPage.data);
    const downloadBtn = $$('.downloadButton').first().attr('href');
    
    if (!downloadBtn) return null;
    
    // Get actual download link
    const downloadPage = await axios.get(`https://www.apkmirror.com${downloadBtn}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $$$ = cheerio.load(downloadPage.data);
    const apkLink = $$$('a[rel="nofollow"]').first().attr('href');
    
    return apkLink || null;
  } catch (error) {
    console.error('ApkMirror Error:', error);
    return null;
  }
}

/**
 * Alternative: Use Evozi APK Downloader API
 * @param {string} appId - PlayStore App ID
 * @returns {Promise<Object|null>} - App details
 */
async function getFromEvozi(appId) {
  try {
    // Evozi API (working as of 2025)
    const response = await axios.get(`https://apps.evozi.com/api/generate`, {
      params: {
        package: appId,
        format: 'json'
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (response.data && response.data.status === 'ok') {
      return {
        name: response.data.app_name,
        version: response.data.app_version,
        size: response.data.app_size,
        dllink: response.data.download_link,
        developer: response.data.developer_name
      };
    }
    return null;
  } catch (error) {
    console.error('Evozi API Error:', error);
    return null;
  }
}

/**
 * Alternative: Use PureAPK API
 * @param {string} appName - App name
 * @returns {Promise<Object|null>} - App details
 */
async function getFromPureAPK(appName) {
  try {
    // PureAPK search
    const searchRes = await axios.get(`https://pureapk.com/search?q=${encodeURIComponent(appName)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(searchRes.data);
    const firstResult = $('.app-item').first();
    
    if (!firstResult.length) return null;
    
    const appUrl = firstResult.find('a').attr('href');
    const appName_text = firstResult.find('.app-name').text();
    
    if (!appUrl) return null;
    
    // Get download page
    const appPage = await axios.get(`https://pureapk.com${appUrl}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $$ = cheerio.load(appPage.data);
    const downloadLink = $$('a[href*="download"]').attr('href');
    const version = $$('.version').text();
    const size = $$('.size').text();
    
    return {
      name: appName_text,
      version: version || 'Unknown',
      size: size || 'Unknown',
      dllink: downloadLink,
      developer: 'PureAPK'
    };
  } catch (error) {
    console.error('PureAPK Error:', error);
    return null;
  }
}

/**
 * Main function to search and get APK
 * @param {string} query - App name or ID
 * @returns {Promise<Object>} - App details
 */
async function searchAndDownload(query) {
  try {
    // Try multiple sources
    let result = null;
    
    // Method 1: Try Evozi first (most reliable)
    if (query.includes('.')) { // Likely an app ID
      result = await getFromEvozi(query);
      if (result) return result;
    }
    
    // Method 2: Try PureAPK
    result = await getFromPureAPK(query);
    if (result && result.dllink) return result;
    
    // Method 3: Try ApkMirror
    const apkMirrorLink = await getApkMirrorLink(query);
    if (apkMirrorLink) {
      return {
        name: query,
        version: 'Latest',
        size: 'Unknown',
        dllink: apkMirrorLink,
        developer: 'ApkMirror'
      };
    }
    
    return null;
  } catch (error) {
    console.error('SearchAndDownload Error:', error);
    return null;
  }
}

// ============= COMMANDS =============

// Main APK download command
zokou({
  'nomCom': 'apk',
  'aliases': ['app', 'playstore', 'downloadapp'],
  'reaction': '📱',
  'categorie': 'Download'
}, async (groupId, client, context) => {
  const { repondre, arg, ms, sender } = context;

  try {
    const appName = arg.join(" ").trim();
    
    if (!appName) {
      return repondre(`❌ *Please provide an app name or ID.*\n\n*Examples:*\n.apk whatsapp\n.apk com.whatsapp\n.apk instagram\n.apk facebook`);
    }

    await repondre(`🔍 *Searching for:* ${appName}\n⏳ Checking multiple sources...`);

    // Search for app
    const appDetails = await searchAndDownload(appName);

    if (!appDetails || !appDetails.dllink) {
      return repondre(`❌ *Could not find download link for:* ${appName}\n\nTry using exact app ID (e.g., com.whatsapp)`);
    }

    // Prepare app info
    const appInfo = `📱 *${appDetails.name || appName}*\n` +
                   `📌 Version: ${appDetails.version || 'Latest'}\n` +
                   `💾 Size: ${appDetails.size || 'Unknown'}\n` +
                   `👤 Source: ${appDetails.developer || 'PlayStore'}`;

    // Send the APK file
    await client.sendMessage(
      groupId,
      {
        document: { url: appDetails.dllink },
        fileName: `${appDetails.name || appName}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: `*${conf.BOT_NAME} APK DOWNLOADER*\n\n${appInfo}\n\n✅ *Download complete!*\n\n_⚠️ Make sure to enable "Install from unknown sources" on your device_`
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("APK Download Error:", error);
    
    let errorMessage = "❌ *APK download failed!*\n\n";
    
    if (error.response) {
      errorMessage += `Server Error: ${error.response.status}\n`;
    } else if (error.request) {
      errorMessage += "Network Error: Please check your connection\n";
    } else {
      errorMessage += `Error: ${error.message}\n`;
    }
    
    errorMessage += "\n_Try again with exact app ID (e.g., .apk com.whatsapp)_";
    
    repondre(errorMessage);
  }
});

// Search apps only command
zokou({
  'nomCom': 'searchapp',
  'aliases': ['findapp', 'appsearch'],
  'reaction': '🔍',
  'categorie': 'Search'
}, async (groupId, client, context) => {
  const { repondre, arg, ms } = context;

  try {
    const appName = arg.join(" ").trim();
    
    if (!appName) {
      return repondre("❌ *Please provide app name to search*");
    }

    await repondre(`🔍 *Searching PlayStore for:* ${appName}...`);

    const apps = await searchPlayStore(appName);

    if (!apps || apps.length === 0) {
      return repondre(`❌ *No apps found for:* ${appName}\n\nTry a different name`);
    }

    let message = "*📱 PLAYSTORE SEARCH RESULTS:*\n\n";
    
    apps.forEach((app, index) => {
      message += `*${index + 1}.* ${app.name}\n`;
      message += `   🆔 \`${app.id}\`\n`;
      message += `   👤 ${app.developer}\n\n`;
    });

    message += "📌 *To download:*\n";
    message += "`.apk com.app.id`\n";
    message += "Example: `.apk com.whatsapp`";

    repondre(message);

  } catch (error) {
    console.error("App Search Error:", error);
    repondre("❌ *Search failed*\n\n_Please try again later._");
  }
});

// Direct download by ID
zokou({
  'nomCom': 'apkdownload',
  'aliases': ['getapk', 'dlapk'],
  'reaction': '⬇️',
  'categorie': 'Download'
}, async (groupId, client, context) => {
  const { repondre, arg, ms } = context;

  try {
    const appId = arg.join(" ").trim();
    
    if (!appId) {
      return repondre("❌ *Please provide app ID*\n\nExample:\n.apkdownload com.whatsapp");
    }

    await repondre(`📦 *Downloading from PlayStore:* ${appId}\n⏳ Please wait...`);

    const appDetails = await getFromEvozi(appId);

    if (!appDetails || !appDetails.dllink) {
      return repondre(`❌ *Could not download: ${appId}*\n\nMake sure the app ID is correct.`);
    }

    const appInfo = `📱 *${appDetails.name}*\n` +
                   `📌 Version: ${appDetails.version}\n` +
                   `💾 Size: ${appDetails.size}\n` +
                   `👤 Developer: ${appDetails.developer}`;

    await client.sendMessage(
      groupId,
      {
        document: { url: appDetails.dllink },
        fileName: `${appDetails.name}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: `*${conf.BOT_NAME} PLAYSTORE DOWNLOADER*\n\n${appInfo}\n\n✅ *Download complete!*`
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("Direct APK Download Error:", error);
    repondre("❌ *Failed to download APK*\n\n_Check app ID and try again._");
  }
});

module.exports = {
  searchPlayStore,
  getFromEvozi,
  getFromPureAPK,
  getApkMirrorLink
};
