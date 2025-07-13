const nodeCron = require('node-cron');
const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');
const { getClient } = require('./whatsappService');

exports.scheduleReminder = appointment => {
  const { start, reminderMinutes, contacts } = appointment;
  if (!start || !reminderMinutes) return;
  const date = new Date(start);
  date.setMinutes(date.getMinutes() - reminderMinutes);
  nodeCron.schedule(dateToCron(date), async () => {
    const client = getClient();
    if (!client) return;
    const conts = await Contact.find({ _id: { $in: contacts } });
    conts.forEach(c => {
      if (process.env.TEST_MODE === 'true') {
        console.log(`[TEST] Would send reminder to ${c.number}`);
      } else {
        client.sendText(c.number + '@c.us', `Reminder: ${appointment.title}`);
      }
    });
  });
};

function dateToCron(date) {
  return `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth()+1} *`;
}
