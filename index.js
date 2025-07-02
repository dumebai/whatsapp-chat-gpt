// Import wa-automate for WhatsApp automation
const { create } = require('@open-wa/wa-automate');

// Import OpenAI SDK
const OpenAI = require('openai');

// Load environment variables (e.g., API keys)
require('dotenv').config();

// Initialize OpenAI with API key from .env
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Create WhatsApp client instance
create().then(client => start(client));

// Main logic to handle messages
async function start(client) {
    client.onMessage(async message => {
        // Ignore empty messages or group chats
        if (message.body && !message.isGroupMsg) {
            try {
                // Custom prompt for ChatGPT to act as a financial expert
                const prompt = `Act as a financial markets expert. Reply concisely and confidently: "${message.body}"`;

                // Send message to OpenAI API using GPT-3.5
                const response = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: prompt }],
                });

                // Extract the AI's reply
                const reply = response.choices[0].message.content.trim();

                // Send the reply back via WhatsApp
                await client.sendText(message.from, reply);
            } catch (err) {
                // Log any errors and notify the user
                console.error(err);
                await client.sendText(message.from, "GPT error. Try again later.");
            }
        }
    });
}