
# 🤖 WhatsApp Chat GPT Bot (OpenAI + @open-wa/wa-automate)

This is a lightweight WhatsApp bot that responds to private messages with financial market predictions using OpenAI's GPT-3.5 model. It uses [@open-wa/wa-automate](https://github.com/open-wa/wa-automate-nodejs) to interface with WhatsApp Web.

---

## ⚙️ Features

- Auto-responds to incoming private WhatsApp messages
- Uses ChatGPT to provide financial insights and predictions
- Short, confident responses in expert tone

---

## 📦 Setup Instructions

### 1. Clone or download this repo

```bash
git clone https://github.com/dumebai/whatsapp-chat-gpt.git
cd whatsapp-chat-gpt
```

### 2. Install required packages

```bash
npm install
```

### 3. Create a `.env` file

Inside the root directory, create a `.env` file:

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

You can get your API key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

---

## 🚀 Run the Bot

```bash
npm start
```

A QR code will appear in the terminal – scan it using your WhatsApp mobile app to activate the session.

---

## 💬 Example Prompts

- “What's your take on Bitcoin this week?”
- “Is it a good time to invest in Tesla?”
- “What's the market sentiment for Ethereum?”
- “Will inflation go down in the next quarter?”

---

## 🧠 Tech Stack

- `@open-wa/wa-automate` – for WhatsApp automation
- `openai` – to communicate with GPT-3.5
- `dotenv` – to securely load environment variables

---

## 🔒 Notes

- This bot only responds to **private messages**, not group chats.
- Make sure to **keep your OpenAI key private** and monitor usage limits to avoid unexpected charges.

---

## 📜 License

MIT – free to use, modify, and commercialize with attribution. If you find this useful, give credit or build something big with it 🚀
