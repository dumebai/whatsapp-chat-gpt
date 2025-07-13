/**
 * @notice Appointment model
 */
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  description: String,
  start: Date,
  reminderMinutes: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
