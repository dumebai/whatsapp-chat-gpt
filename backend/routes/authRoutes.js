const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { register, verify, login } = require('../controllers/authController');

router.post('/register', register);
router.get('/verify', verify);
router.post('/login', login);
router.get('/me', auth, (req, res) => res.json({ id: req.userId }));

module.exports = router;
