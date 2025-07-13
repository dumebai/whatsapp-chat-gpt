const { create } = require('@open-wa/wa-automate');
const fs = require('fs');

let client;

exports.init = async () => {
  const sessionPath = process.env.WHATSAPP_SESSION_PATH || './sessions';
  if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath);
  client = await create({
    sessionId: 'pingu',
    authTimeout: 60,
    qrTimeout: 0,
    cacheEnabled: false,
    chromiumArgs: process.env.WHATSAPP_CHROMIUM_ARGS?.split(' ') || []
  });
  return client;
};

exports.getClient = () => client;
