const nodeCron = require('node-cron');
const Campaign = require('../models/Campaign');
const Contact = require('../models/Contact');
const { getClient } = require('./whatsappService');

exports.scheduleCampaign = campaign => {
  nodeCron.schedule(dateToCron(new Date(campaign.sendAt)), async () => {
    const client = getClient();
    if (!client) return;
    const contacts = await Contact.find({ _id: { $in: campaign.contacts } });
    contacts.forEach(c => {
      if (process.env.TEST_MODE === 'true') {
        console.log(`[TEST] Would send campaign to ${c.number}`);
      } else {
        client.sendText(c.number + '@c.us', campaign.message);
      }
    });
  });
};

function dateToCron(date) {
  return `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth()+1} *`;
}
