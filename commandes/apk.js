const { zokou } = require("../framework/zokou");
const fs = require('fs-extra');
const conf = require('../set');
const { default: axios } = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const gis = require('g-i-s');

// Configuration
const API_BASE = 'https://bk9.fun';

/**
 * Search for apps on PlayStore
 * @param {string} query - App name to search
 * @returns {Promise<Array>} - List of apps found
 */
async function searchApps(query) {
  try {
    const response = await axios.get(`${API_BASE}/search/apk?q=${encodeURIComponent(query)}`);
    return response.data.BK9 || [];
  } catch (error) {
    console.error('Search API Error:', error.message);
    throw new Error('Failed to search for apps');
  }
}

/**
 * Get APK download details
 * @param {string} appId - App ID
 * @returns {Promise<Object>} - App details with download link
 */
async function getAppDetails(appId) {
  try {
    const response = await axios.get(`${API_BASE}/download/apk?id=${encodeURIComponent(appId)}`);
    return response.data.BK9 || null;
  } catch (error) {
    console.error('Download API Error:', error.message);
    throw new Error('Failed to get app details');
  }
}

/**
 * Format app list for display
 * @param {Array} apps - List of apps
 * @returns {string} - Formatted message
 */
function formatAppList(apps) {
  let message = "*📱 APPS FOUND:*\n\n";
  
  apps.slice(0, 10).forEach((app, index) => {
    message += `*${index + 1}.* ${app.name}\n`;
    message += `   🆔 \`${app.id}\`\n`;
    if (app.developer) message += `   👤 ${app.developer}\n`;
    message += '\n';
  });
  
  message += "\n_Send the app ID to download_";
  return message;
}

// Main command handler
zokou({
  'nomCom': 'apk2',
  'aliases': ['app', 'playstore', 'downloadapp'],
  'reaction': '📱',
  'categorie': 'Download'
}, async (groupId, client, context) => {
  const { repondre, arg, ms, sender } = context;

  try {
    // Check if app name is provided
    const appName = arg.join(" ").trim();
    if (!appName) {
      return repondre(`❌ *Please provide an app name.*\n\nExample:\n.apk whatsapp\n.apk instagram\n.apk facebook`);
    }

    // Send searching message
    await repondre(`🔍 *Searching for:* ${appName}\n⏳ Please wait...`);

    // Search for apps
    const apps = await searchApps(appName);
    
    // Check if any results were found
    if (!apps || apps.length === 0) {
      return repondre(`❌ *No app found with name:* ${appName}\n\nPlease try another name.`);
    }

    // If multiple apps found, show list
    if (apps.length > 1 && !arg.includes('--download')) {
      const appList = formatAppList(apps);
      return repondre(appList);
    }

    // Download the first app
    const selectedApp = apps[0];
    
    await repondre(`📦 *Downloading:* ${selectedApp.name}\n⏳ Please wait...`);

    // Get app details with download link
    const appDetails = await getAppDetails(selectedApp.id);

    // Check if download link is available
    if (!appDetails || !appDetails.dllink) {
      return repondre("❌ *Unable to find download link for this app.*");
    }

    // Prepare app info message
    const appInfo = `📱 *${appDetails.name || selectedApp.name}*\n`;
    // Add more info if available
    if (appDetails.version) appInfo += `📌 Version: ${appDetails.version}\n`;
    if (appDetails.size) appInfo += `💾 Size: ${appDetails.size}\n`;
    if (appDetails.developer) appInfo += `👤 Developer: ${appDetails.developer}\n`;

    // Send the APK file
    await client.sendMessage(
      groupId,
      {
        document: { url: appDetails.dllink },
        fileName: `${appDetails.name || selectedApp.name}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: `*${conf.BOT_NAME} APK DOWNLOADER*\n\n${appInfo}\n✅ *Download complete!*\n\n_Thank you for using ${conf.BOT_NAME}_`
      },
      { quoted: ms }
    );

  } catch (error) {
    // Catch any errors and notify the user
    console.error("APK Download Error:", error);
    
    let errorMessage = "❌ *APK download failed!*\n\n";
    
    if (error.response) {
      // API error
      errorMessage += `Server Error: ${error.response.status}\n`;
    } else if (error.request) {
      // Network error
      errorMessage += "Network Error: Please check your connection\n";
    } else {
      // Other errors
      errorMessage += `Error: ${error.message}\n`;
    }
    
    errorMessage += "\n_Please try again later._";
    
    repondre(errorMessage);
  }
});

// Command to download specific app by ID
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

    await repondre(`📦 *Downloading app ID:* ${appId}\n⏳ Please wait...`);

    const appDetails = await getAppDetails(appId);

    if (!appDetails || !appDetails.dllink) {
      return repondre("❌ *Unable to find download link for this app ID.*");
    }

    const appInfo = `📱 *${appDetails.name || 'App'}*\n`;
    if (appDetails.version) appInfo += `📌 Version: ${appDetails.version}\n`;
    if (appDetails.size) appInfo += `💾 Size: ${appDetails.size}\n`;

    await client.sendMessage(
      groupId,
      {
        document: { url: appDetails.dllink },
        fileName: `${appDetails.name || 'app'}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: `*${conf.BOT_NAME} APK DOWNLOADER*\n\n${appInfo}\n✅ *Download complete!*`
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("Direct APK Download Error:", error);
    repondre("❌ *Failed to download APK*\n\n_Please try again later._");
  }
});

// Command to search apps only
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

    await repondre(`🔍 *Searching for:* ${appName}...`);

    const apps = await searchApps(appName);

    if (!apps || apps.length === 0) {
      return repondre(`❌ *No apps found for:* ${appName}`);
    }

    let message = "*📱 SEARCH RESULTS:*\n\n";
    
    apps.slice(0, 15).forEach((app, index) => {
      message += `*${index + 1}.* ${app.name}\n`;
      message += `   🆔 \`${app.id}\`\n`;
      if (app.developer) message += `   👤 ${app.developer}\n`;
      message += '\n';
    });

    message += "\n_Use .apkdownload [app_id] to download_";

    repondre(message);

  } catch (error) {
    console.error("App Search Error:", error);
    repondre("❌ *Search failed*\n\n_Please try again later._");
  }
});

module.exports = {
  searchApps,
  getAppDetails
};
