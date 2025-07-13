const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addContact, listContacts } = require('../controllers/contactController');

router.post('/', auth, addContact);
router.get('/', auth, listContacts);

module.exports = router;
