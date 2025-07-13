const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createCampaign, listCampaigns } = require('../controllers/campaignController');

router.post('/', auth, createCampaign);
router.get('/', auth, listCampaigns);

module.exports = router;
