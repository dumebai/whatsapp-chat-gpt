const Contact = require('../models/Contact');
const { sendError } = require('../utils/responses');

/**
 * @notice Create a new contact
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.addContact = async (req, res) => {
  const { name, number, tags } = req.body;
  if (!number) return sendError(res, 400, 'Number is required');
  const contact = await Contact.create({
    user: req.userId,
    name,
    number,
    tags
  });
  res.json(contact);
};

/**
 * @notice List all contacts for the user
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.listContacts = async (req, res) => {
  const contacts = await Contact.find({ user: req.userId });
  res.json(contacts);
};
