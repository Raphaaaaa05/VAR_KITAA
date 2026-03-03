const { zokou } = require("../framework/zokou");
const fs = require('fs-extra');
const conf = require('../set');
const axios = require('axios');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// ============================================
// FAL.AI JAVA CLIENT INTEGRATION
// ============================================

/**
 * Generate image using fal.ai Java client
 * @param {string} prompt - Image description
 * @returns {Promise<Object>} - Image result
 */
async function generateWithFalClient(prompt) {
    try {
        // Tumia Java client kupitia command line (temporary solution)
        // Kwa production, ungependa kuandika Java bridge ama kutumia REST API
        
        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        if (!falKey) {
            throw new Error("FAL_KEY haijapatikana. Weka kwenye set.js au environment variables");
        }
        
        // Hapa tuna simulate Java client usage
        // Kwa real implementation, ungependa ku-create Java service
        
        // Option 1: Tumia REST API ya fal.ai moja kwa moja (recommended kwa sasa)
        const response = await axios.post(
            "https://fal.run/fal-ai/fast-sdxl",
            {
                prompt: prompt,
                image_size: "square_hd",
                num_inference_steps: 30,
                guidance_scale: 7.5,
                num_images: 1,
                enable_safety_checker: true
            },
            {
                headers: {
                    "Authorization": `Key ${falKey}`,
                    "Content-Type": "application/json"
                },
                timeout: 60000 // 60 seconds timeout
            }
        );
        
        if (response.data && response.data.images && response.data.images[0]) {
            return {
                success: true,
                imageUrl: response.data.images[0].url,
                requestId: response.data.request_id,
                source: "fal.ai (SDXL)"
            };
        }
        
        return {
            success: false,
            error: "Hakuna image iliyorejeshwa"
        };
        
    } catch (error) {
        console.error("Fal.ai Error:", error.response?.data || error.message);
        
        // Jaribu model nyingine kama fast-sdxl imeshindwa
        try {
            console.log("Trying fal-ai/stable-diffusion-v3-medium...");
            
            const response = await axios.post(
                "https://fal.run/fal-ai/stable-diffusion-v3-medium",
                {
                    prompt: prompt,
                    image_size: "1024x1024",
                    num_inference_steps: 28,
                    guidance_scale: 5.0,
                    num_images: 1
                },
                {
                    headers: {
                        "Authorization": `Key ${falKey}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            
            if (response.data && response.data.images && response.data.images[0]) {
                return {
                    success: true,
                    imageUrl: response.data.images[0].url,
                    requestId: response.data.request_id,
                    source: "fal.ai (SD3)"
                };
            }
        } catch (secondError) {
            console.error("Second model also failed:", secondError.message);
        }
        
        return {
            success: false,
            error: error.response?.data?.error || error.message
        };
    }
}

/**
 * Generate image using GLM-Image (kupitia fal.ai)
 * @param {string} prompt - Image description
 * @returns {Promise<Object>} - Image result
 */
async function generateGLMWithFal(prompt) {
    try {
        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        const response = await axios.post(
            "https://fal.run/fal-ai/glm-image",
            {
                prompt: prompt,
                image_size: "square_hd",
                num_inference_steps: 30,
                guidance_scale: 3.5,
                num_images: 1
            },
            {
                headers: {
                    "Authorization": `Key ${falKey}`,
                    "Content-Type": "application/json"
                }
            }
        );
        
        if (response.data && response.data.images && response.data.images[0]) {
            return {
                success: true,
                imageUrl: response.data.images[0].url,
                source: "fal.ai (GLM-Image)"
            };
        }
        
        return null;
    } catch (error) {
        console.error("GLM via Fal Error:", error.message);
        return null;
    }
}

/**
 * Advanced generation with queue subscription (kufuatilia progress)
 * @param {string} prompt - Image description
 * @returns {Promise<Object>} - Image result with status
 */
async function generateWithQueue(prompt) {
    try {
        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        // Submit job to queue
        const submitResponse = await axios.post(
            "https://queue.fal.run/fal-ai/fast-sdxl",
            {
                prompt: prompt,
                image_size: "square_hd"
            },
            {
                headers: {
                    "Authorization": `Key ${falKey}`,
                    "Content-Type": "application/json"
                }
            }
        );
        
        const requestId = submitResponse.data.request_id;
        const statusUrl = submitResponse.data.status_url;
        
        // Poll for status
        let completed = false;
        let attempts = 0;
        const maxAttempts = 30; // 30 seconds max
        
        while (!completed && attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
            
            const statusResponse = await axios.get(statusUrl, {
                headers: {
                    "Authorization": `Key ${falKey}`
                }
            });
            
            const status = statusResponse.data;
            
            if (status.status === "COMPLETED") {
                completed = true;
                return {
                    success: true,
                    imageUrl: status.response.images[0].url,
                    requestId: requestId,
                    source: "fal.ai (Queue)"
                };
            } else if (status.status === "FAILED") {
                return {
                    success: false,
                    error: status.error || "Processing failed"
                };
            }
            
            attempts++;
        }
        
        if (!completed) {
            return {
                success: false,
                error: "Timeout - processing took too long"
            };
        }
        
    } catch (error) {
        console.error("Queue Error:", error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// ============= MAIN COMMAND =============

// Image generation command using fal.ai
zokou({
    'nomCom': 'fal',
    'aliases': ['falai', 'generate', 'sdxl'],
    'reaction': '🎨',
    'categorie': 'AI'
}, async (groupId, client, context) => {
    const { repondre, arg, ms, sender } = context;

    try {
        const prompt = arg.join(" ").trim();
        
        if (!prompt) {
            return repondre(`❌ *Tafadhali andika prompt ya picha unayotaka!*\n\n*Mifano:*\n.fal A cute shih-tzu puppy\n.falai beautiful sunset over mountains\n.sdxl futuristic city, cyberpunk style`);
        }

        // Check if API key exists
        if (!conf.FAL_KEY && !process.env.FAL_KEY) {
            return repondre(`❌ *FAL_KEY haijapatikana!*\n\nTafadhali weka API key yako kwenye set.js:\nFAL_KEY: "YOUR_KEY_HERE"\n\nPata key kutoka: https://fal.ai/dashboard`);
        }

        await repondre(`🎨 *FAL.AI Image Generator*\n\n📝 *Prompt:* ${prompt}\n⏳ Inatengeneza picha...\n\n_Hii inaweza kuchukua sekunde 10-30_`);

        // Try different models
        let result = null;
        
        // First try: fast-sdxl
        result = await generateWithFalClient(prompt);
        
        // Second try: GLM if first failed
        if (!result.success) {
            console.log("Trying GLM-Image...");
            const glmResult = await generateGLMWithFal(prompt);
            if (glmResult) {
                result = glmResult;
            }
        }
        
        // Third try: Queue-based
        if (!result || !result.success) {
            console.log("Trying queue-based generation...");
            result = await generateWithQueue(prompt);
        }

        if (!result || !result.success) {
            return repondre(`❌ *Imeshindwa kutengeneza picha*\n\nSababu: ${result?.error || 'Unknown error'}\n\nTafadhali jaribu tena baadaye au tumia prompt tofauti.`);
        }

        // Download image
        const imageResponse = await axios.get(result.imageUrl, { 
            responseType: 'arraybuffer',
            timeout: 30000
        });
        const imageBuffer = Buffer.from(imageResponse.data);

        // Send image
        await client.sendMessage(
            groupId,
            {
                image: imageBuffer,
                caption: `🎨 *FAL.AI Image Generated*\n\n📝 *Prompt:* ${prompt}\n🔧 *Model:* ${result.source || 'fal.ai'}\n🆔 *Request ID:* ${result.requestId || 'N/A'}\n\n_Powered by fal.ai & ${conf.BOT_NAME}_`,
                mimetype: "image/png"
            },
            { quoted: ms }
        );

    } catch (error) {
        console.error("FAL.AI Generation Error:", error);
        
        let errorMessage = "❌ *Image generation failed!*\n\n";
        
        if (error.response) {
            errorMessage += `Server Error: ${error.response.status}\n`;
            if (error.response.data?.error) {
                errorMessage += `Message: ${error.response.data.error}\n`;
            }
        } else if (error.request) {
            errorMessage += "Network Error: Check your connection\n";
        } else {
            errorMessage += `Error: ${error.message}\n`;
        }
        
        errorMessage += "\n_Jaribu tena baadaye_";
        
        repondre(errorMessage);
    }
});

// Command with specific model selection
zokou({
    'nomCom': 'falmodel',
    'aliases': ['aimodel', 'selectmodel'],
    'reaction': '🤖',
    'categorie': 'AI'
}, async (groupId, client, context) => {
    const { repondre, arg, ms } = context;

    try {
        const input = arg.join(" ").trim();
        
        if (!input) {
            return repondre(`❌ *Usage:* .falmodel [model] [prompt]\n\n*Available Models:*\n• sdxl - Fast SDXL\n• sd3 - Stable Diffusion 3\n• glm - GLM-Image (best for text)\n• flux - Flux.1 Pro\n• luma - Luma Dream Machine\n\n*Example:*\n.falmodel sdxl cute puppy\n.falmodel glm beautiful sunset`);
        }

        const parts = input.split(" ");
        const model = parts[0].toLowerCase();
        const prompt = parts.slice(1).join(" ");

        if (!prompt) {
            return repondre("❌ *Tafadhali andika prompt baada ya model*");
        }

        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        // Map model to endpoint
        const modelMap = {
            'sdxl': 'fal-ai/fast-sdxl',
            'sd3': 'fal-ai/stable-diffusion-v3-medium',
            'glm': 'fal-ai/glm-image',
            'flux': 'fal-ai/flux-pro',
            'luma': 'fal-ai/luma-dream-machine'
        };

        const endpoint = modelMap[model];
        if (!endpoint) {
            return repondre(`❌ *Model ${model} haipo!*\n\nModels zinazopatikana: sdxl, sd3, glm, flux, luma`);
        }

        await repondre(`🤖 *Using ${model.toUpperCase()} model*\n📝 *Prompt:* ${prompt}\n⏳ Generating...`);

        const response = await axios.post(
            `https://fal.run/${endpoint}`,
            {
                prompt: prompt,
                image_size: "1024x1024",
                num_images: 1
            },
            {
                headers: {
                    "Authorization": `Key ${falKey}`,
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.data || !response.data.images || !response.data.images[0]) {
            return repondre("❌ *Hakuna image iliyorejeshwa*");
        }

        const imageUrl = response.data.images[0].url;
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imageResponse.data);

        await client.sendMessage(
            groupId,
            {
                image: imageBuffer,
                caption: `🤖 *${model.toUpperCase()} Model Result*\n\n📝 *Prompt:* ${prompt}\n\n_Powered by fal.ai_`
            },
            { quoted: ms }
        );

    } catch (error) {
        console.error("Model Error:", error);
        repondre(`❌ *Error:* ${error.message}`);
    }
});

// Check account status and balance
zokou({
    'nomCom': 'falstatus',
    'aliases': ['aistatus', 'apikey'],
    'reaction': '📊',
    'categorie': 'AI'
}, async (groupId, client, context) => {
    const { repondre, ms } = context;

    try {
        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        if (!falKey) {
            return repondre("❌ *FAL_KEY haijapatikana!*");
        }

        // Test API by listing models
        const response = await axios.get("https://fal.ai/models", {
            headers: {
                "Authorization": `Key ${falKey}`
            }
        });

        const status = `📊 *FAL.AI Status*\n\n` +
                      `✅ *API Key:* Active\n` +
                      `🔑 *Key Format:* ${falKey.substring(0, 8)}...\n` +
                      `📦 *Models Available:* ${response.data?.length || 'Unknown'}\n` +
                      `⚡ *Client Version:* 0.7.1\n\n` +
                      `_Unaweza kutumia .fal kutengeneza picha_`;

        repondre(status);

    } catch (error) {
        repondre(`❌ *API Key Error:* ${error.response?.status === 401 ? 'Invalid key' : error.message}`);
    }
});

module.exports = {
    generateWithFalClient,
    generateGLMWithFal,
    generateWithQueue
};
