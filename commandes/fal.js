const { zokou } = require("../framework/zokou");
const fs = require('fs-extra');
const conf = require('../set');
const axios = require('axios');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const path = require('path');
const os = require('os');

// ============================================
// FAL.AI JAVA CLIENT v0.7.1 INTEGRATION
// ============================================

// Configuration
const JAVA_CLASS_NAME = "FalAIImageGenerator";
const JAVA_FILE_PATH = path.join(__dirname, `${JAVA_CLASS_NAME}.java`);
const JAR_FILE_PATH = path.join(__dirname, "fal-client-0.7.1.jar");

/**
 * Download fal.ai Java client JAR if not exists
 */
async function ensureFalJar() {
    try {
        if (!fs.existsSync(JAR_FILE_PATH)) {
            console.log("📥 Downloading fal.ai Java client v0.7.1...");
            
            // Try multiple Maven repositories
            const urls = [
                "https://repo1.maven.org/maven2/ai/fal/client/fal-client/0.7.1/fal-client-0.7.1.jar",
                "https://central.maven.org/maven2/ai/fal/client/fal-client/0.7.1/fal-client-0.7.1.jar",
                "https://jcenter.bintray.com/ai/fal/client/fal-client/0.7.1/fal-client-0.7.1.jar"
            ];
            
            let downloaded = false;
            for (const url of urls) {
                try {
                    const response = await axios({
                        method: 'get',
                        url: url,
                        responseType: 'stream',
                        timeout: 30000
                    });
                    
                    const writer = fs.createWriteStream(JAR_FILE_PATH);
                    response.data.pipe(writer);
                    
                    await new Promise((resolve, reject) => {
                        writer.on('finish', resolve);
                        writer.on('error', reject);
                    });
                    
                    console.log("✅ JAR downloaded successfully!");
                    downloaded = true;
                    break;
                } catch (e) {
                    console.log(`Failed to download from ${url}, trying next...`);
                }
            }
            
            if (!downloaded) {
                throw new Error("Could not download fal-client JAR");
            }
        }
    } catch (error) {
        console.error("JAR download error:", error);
        throw error;
    }
}

/**
 * Generate Java code for fal.ai client
 * @param {string} prompt - Image description
 * @param {string} model - Model to use
 * @param {string} apiKey - FAL.ai API key
 * @returns {string} - Java source code
 */
function generateJavaCode(prompt, model, apiKey) {
    // Escape the prompt for Java string
    const escapedPrompt = prompt.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    
    return `
import ai.fal.client.*;
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

public class ${JAVA_CLASS_NAME} {
    public static void main(String[] args) {
        try {
            System.err.println("🔄 Initializing fal.ai client v0.7.1...");
            
            // Initialize fal.ai client with API key
            FalClient fal = FalClient.builder()
                .credentials(Credentials.fromEnv())
                .build();
            
            System.err.println("✅ Client initialized");
            System.err.println("📝 Prompt: ${escapedPrompt}");
            System.err.println("🤖 Model: ${model}");
            
            // Prepare input with enhanced parameters
            Map<String, Object> input = new HashMap<>();
            input.put("prompt", "${escapedPrompt}");
            input.put("image_size", "1024x1024");
            input.put("num_inference_steps", 40);
            input.put("guidance_scale", 7.5);
            input.put("num_images", 1);
            input.put("safety_checker", true);
            
            // Additional parameters for better quality
            Map<String, Object> options = new HashMap<>();
            options.put("enhance_prompt", true);
            options.put("high_quality", true);
            options.put("seed", (int)(Math.random() * 1000000));
            input.put("options", options);
            
            System.err.println("⏳ Submitting to queue...");
            
            // Create queue update handler with progress tracking
            QueueUpdateHandler<JsonObject> onQueueUpdate = update -> {
                System.err.println("📊 Status: " + update.getStatus());
                if (update.getStatus() == QueueStatus.IN_PROGRESS) {
                    if (update.getLogs() != null && update.getLogs().size() > 0) {
                        System.err.println("⚡ Progress: " + update.getLogs().get(0));
                    }
                }
            };
            
            // Subscribe to model with options
            var result = fal.subscribe(
                "${model}",
                SubscribeOptions.<JsonObject>builder()
                    .input(input)
                    .resultType(JsonObject.class)
                    .onQueueUpdate(onQueueUpdate)
                    .pollingInterval(1000, TimeUnit.MILLISECONDS)
                    .timeout(60, TimeUnit.SECONDS)
                    .build()
            );
            
            System.err.println("✅ Generation complete!");
            
            // Extract image URL and details
            JsonObject data = result.getData();
            JsonArray images = data.get("images").getAsJsonArray();
            
            if (images != null && images.size() > 0) {
                JsonObject firstImage = images.get(0).getAsJsonObject();
                String imageUrl = firstImage.get("url").getAsString();
                
                // Get additional info if available
                String width = firstImage.has("width") ? firstImage.get("width").getAsString() : "1024";
                String height = firstImage.has("height") ? firstImage.get("height").getAsString() : "1024";
                String contentType = firstImage.has("content_type") ? firstImage.get("content_type").getAsString() : "image/png";
                
                // Create JSON response for Node.js
                Map<String, Object> response = new HashMap<>();
                response.put("success", true);
                response.put("imageUrl", imageUrl);
                response.put("width", width);
                response.put("height", height);
                response.put("contentType", contentType);
                response.put("model", "${model}");
                response.put("prompt", "${escapedPrompt}");
                response.put("requestId", result.getRequestId());
                
                // Convert to JSON and print
                com.google.gson.Gson gson = new com.google.gson.Gson();
                System.out.println(gson.toJson(response));
            } else {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("error", "No images generated");
                com.google.gson.Gson gson = new com.google.gson.Gson();
                System.out.println(gson.toJson(error));
            }
            
        } catch (Exception e) {
            System.err.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
            
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("error", e.getMessage());
            error.put("exception", e.getClass().getName());
            
            com.google.gson.Gson gson = new com.google.gson.Gson();
            System.out.println(gson.toJson(error));
        }
    }
}
`;
}

/**
 * Generate image using fal.ai Java client
 * @param {string} prompt - Image description
 * @param {string} model - Model to use
 * @returns {Promise<Object>} - Image result
 */
async function generateWithJavaClient(prompt, model = "fal-ai/fast-sdxl") {
    try {
        const falKey = process.env.FAL_KEY || conf.FAL_KEY;
        
        if (!falKey) {
            throw new Error("❌ FAL_KEY haijapatikana. Weka kwenye set.js");
        }

        // Ensure JAR exists
        await ensureFalJar();

        // Set environment variable for Java
        process.env.FAL_KEY = falKey;

        // Generate Java source code
        const javaCode = generateJavaCode(prompt, model, falKey);
        await fs.writeFile(JAVA_FILE_PATH, javaCode);
        
        console.log("📝 Java source code written");

        // Compile Java code
        console.log("🔄 Compiling Java client v0.7.1...");
        
        // Check if Java is installed
        try {
            await execPromise('java -version');
        } catch (error) {
            throw new Error("Java haijasakinishwa. Tafadhali install Java JDK 11+");
        }
        
        // Compile with classpath
        const compileCmd = `javac -cp "fal-client-0.7.1.jar${path.delimiter}." -Xlint:-options ${JAVA_CLASS_NAME}.java`;
        
        const { stderr: compileStderr } = await execPromise(compileCmd, { 
            cwd: __dirname,
            timeout: 10000 
        });
        
        if (compileStderr && !compileStderr.includes("warning")) {
            console.error("Compilation warning:", compileStderr);
        }
        
        console.log("✅ Compilation successful");

        // Run Java program
        console.log("🚀 Running Java client for image generation...");
        const runCmd = `java -cp "fal-client-0.7.1.jar${path.delimiter}." ${JAVA_CLASS_NAME}`;
        
        const { stdout, stderr } = await execPromise(runCmd, { 
            cwd: __dirname,
            timeout: 120000, // 2 minutes timeout
            maxBuffer: 10 * 1024 * 1024 // 10MB buffer
        });
        
        // Print Java stderr for debugging
        if (stderr) {
            console.log("📊 Java Progress:", stderr);
        }
        
        // Parse JSON output
        try {
            // Find JSON in stdout (in case there's extra output)
            const jsonMatch = stdout.match(/\{.*\}/s);
            const jsonStr = jsonMatch ? jsonMatch[0] : stdout;
            
            const result = JSON.parse(jsonStr);
            
            if (result.success && result.imageUrl) {
                return {
                    success: true,
                    imageUrl: result.imageUrl,
                    model: result.model || model,
                    width: result.width || 1024,
                    height: result.height || 1024,
                    requestId: result.requestId,
                    source: `fal.ai Java Client v0.7.1`
                };
            } else {
                return {
                    success: false,
                    error: result.error || "Unknown Java client error"
                };
            }
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError.message);
            console.log("Raw stdout:", stdout);
            
            // Try to extract URL from output
            const urlMatch = stdout.match(/https?:\/\/[^\s"']+\.(jpg|jpeg|png|gif|webp)[^\s"']*/i);
            if (urlMatch) {
                return {
                    success: true,
                    imageUrl: urlMatch[0],
                    source: "fal.ai (URL extracted)"
                };
            }
            
            return {
                success: false,
                error: "Could not parse Java output"
            };
        }
        
    } catch (error) {
        console.error("Java execution error:", error);
        return {
            success: false,
            error: error.message
        };
    } finally {
        // Clean up Java files (optional - comment out for debugging)
        try {
            await fs.unlink(JAVA_FILE_PATH).catch(() => {});
            await fs.unlink(`${JAVA_CLASS_NAME}.class`).catch(() => {});
        } catch (cleanupError) {
            // Ignore cleanup errors
        }
    }
}

// ============= MAIN COMMAND =============

zokou({
    'nomCom': 'faljava',
    'aliases': ['falj', 'javafal', 'genimg'],
    'reaction': '☕',
    'categorie': 'AI'
}, async (groupId, client, context) => {
    const { repondre, arg, ms } = context;

    try {
        // Your specific prompt
        const defaultPrompt = "An action shot of a black lab swimming in an inground suburban swimming pool. The camera is placed meticulously on the water line, dividing the image in half, revealing both the dogs head above water holding a tennis ball in it's mouth, and it's paws paddling underwater.";
        
        const prompt = arg.join(" ").trim() || defaultPrompt;
        
        await repondre(`☕ *FAL.AI Java Client v0.7.1*\n\n📝 *Prompt:* ${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}\n⏳ Generating image...\n\n_Using official Java client_`);

        // Generate image using Java client
        const result = await generateWithJavaClient(prompt);

        if (!result.success) {
            return repondre(`❌ *Failed to generate image*\n\nError: ${result.error}\n\n_Try again or use different prompt_`);
        }

        // Download the image
        const imageResponse = await axios.get(result.imageUrl, { 
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; WhatsApp-Bot)'
            }
        });
        
        const imageBuffer = Buffer.from(imageResponse.data);

        // Prepare caption
        const caption = `☕ *FAL.AI Java Client v0.7.1*\n\n` +
                       `📝 *Prompt:* ${prompt.substring(0, 200)}${prompt.length > 200 ? '...' : ''}\n` +
                       `🔧 *Model:* ${result.model || 'fast-sdxl'}\n` +
                       `📐 *Size:* ${result.width || 1024}x${result.height || 1024}\n` +
                       `🆔 *Request:* ${result.requestId || 'N/A'}\n\n` +
                       `_Generated with official fal.ai Java client_`;

        // Send the image
        await client.sendMessage(
            groupId,
            {
                image: imageBuffer,
                caption: caption,
                mimetype: "image/png"
            },
            { quoted: ms }
        );

    } catch (error) {
        console.error("Command Error:", error);
        repondre(`❌ *Error:* ${error.message}`);
    }
});

// Quick command for the specific prompt
zokou({
    'nomCom': 'blacklab',
    'aliases': ['labdog', 'swimmingdog'],
    'reaction': '🐕',
    'categorie': 'AI'
}, async (groupId, client, context) => {
    const { repondre, ms } = context;

    try {
        const prompt = "An action shot of a black lab swimming in an inground suburban swimming pool. The camera is placed meticulously on the water line, dividing the image in half, revealing both the dogs head above water holding a tennis ball in it's mouth, and it's paws paddling underwater.";
        
        await repondre(`🐕 *Black Lab Swimming*\n\n⏳ Generating your specific image...\n\n_Using fal.ai Java client v0.7.1_`);

        const result = await generateWithJavaClient(prompt, "fal-ai/fast-sdxl");

        if (!result.success) {
            return repondre(`❌ *Failed: ${result.error}*`);
        }

        const imageResponse = await axios.get(result.imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imageResponse.data);

        await client.sendMessage(
            groupId,
            {
                image: imageBuffer,
                caption: `🐕 *Black Lab Swimming*\n\n📝 *${prompt}*\n\n_Generated with fal.ai Java Client v0.7.1_`,
                mimetype: "image/png"
            },
            { quoted: ms }
        );

    } catch (error) {
        console.error(error);
        repondre("❌ *Error generating image*");
    }
});

module.exports = {
    generateWithJavaClient
};
