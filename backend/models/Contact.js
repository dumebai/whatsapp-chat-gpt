/**
 * @notice Contact model
 */
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  number: { type: String, required: true },
  tags: [String],
  whatsappId: String
});

module.exports = mongoose.model('Contact', contactSchema);
