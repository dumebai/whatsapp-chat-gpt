const Campaign = require('../models/Campaign');
const { scheduleCampaign } = require('../services/campaignService');
const { sendError } = require('../utils/responses');

/**
 * @notice Create a campaign and schedule it
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.createCampaign = async (req, res) => {
  const { contacts, message, sendAt, recurrence } = req.body;
  if (!message || !contacts?.length) {
    return sendError(res, 400, 'Message and contacts required');
  }
  const campaign = await Campaign.create({
    user: req.userId,
    contacts,
    message,
    sendAt,
    recurrence
  });
  scheduleCampaign(campaign);
  res.json(campaign);
};

/**
 * @notice List campaigns for the user
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.listCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({ user: req.userId }).populate('contacts');
  res.json(campaigns);
};
