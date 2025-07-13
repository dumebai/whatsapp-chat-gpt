/**
 * @notice Campaign model
 */
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  message: String,
  sendAt: Date,
  recurrence: String, // daily, weekly, monthly
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema);
