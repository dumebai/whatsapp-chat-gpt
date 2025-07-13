const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createAppointment, listAppointments } = require('../controllers/appointmentController');

router.post('/', auth, createAppointment);
router.get('/', auth, listAppointments);

module.exports = router;
