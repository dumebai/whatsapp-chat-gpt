# PingU

PingU is a WhatsApp powered CRM web application that lets you manage contacts, appointments and marketing campaigns. It uses **wa-automate-nodejs** for WhatsApp messaging and **MongoDB** for persistence.

## Features

- User registration with email verification
- JWT based login/logout
- Connect your WhatsApp account and keep the session persistent
- Manage contacts individually or via CSV import
- Schedule appointments with WhatsApp reminders
- Create marketing campaigns sent via WhatsApp
- Optional test mode to avoid sending real messages

## Project Structure

```
/backend - Express API
/frontend - React app
/shared  - shared interfaces
/test    - seed scripts
```

## Installation

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

## Environment Variables

Create `.env` in the project root or inside backend with the following keys (see `.env.example`):

```env
WHATSAPP_SESSION_PATH=./sessions/
WHATSAPP_CHROMIUM_ARGS=--no-sandbox --disable-setuid-sandbox
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=supersecret
JWT_EXPIRES_IN=1d
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=user@example.com
SMTP_PASS=password
OPENAI_API_KEY=sk-...
BASE_URL=http://localhost:5000
FRONTEND_URL=http://localhost:3000
TEST_MODE=true
```

For the React frontend copy `frontend/.env.example` to `frontend/.env` and adjust the API base URL if needed.

## Running in Development

Start the backend API:

```bash
cd backend
npm run dev
```

In a new terminal start the frontend:

```bash
cd frontend
npm start
```

Scan the QR displayed in the backend terminal to connect WhatsApp.

## Seed Data

```
npm run seed
```

This creates a user `test@pingu.ro` with password `password`.

## Usage

1. Register a new account and verify your email
2. Login to access the dashboard
3. Connect your WhatsApp account via QR code
4. Add contacts and schedule appointments or campaigns
5. Reminders and campaign messages are sent automatically

## Brand Palette

PingU uses a palette inspired by cold arctic tones and modern SaaS design.

- **Primary:** `#0ea5e9`
- **Accent:** `#1e3a8a`
- **Secondary:** `#3b82f6`
- **Light Background:** `#f0f8ff`
- **Dark Background:** `#1f2937`

All text uses the **Inter** font for a clean, modern feel. Light and dark themes can be toggled from the navigation bar.

The frontend supports light and dark modes and a Romanian/English language toggle.

## Production Notes

To build for production run:
```bash
cd frontend
npm run build
```
Copy the `build` folder to your preferred static host or configure your Node.js server to serve it. The backend can be started with:
```bash
node backend/app.js
```


- The frontend can be deployed to **Vercel**.
- Any Node.js hosting supporting MongoDB can run the backend.

### Docker

```bash
docker-compose up --build
```

### CI

GitHub Actions validates the backend on each push by installing dependencies and checking the database connection.

## License

MIT
