const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');
const { scheduleReminder } = require('../services/reminderService');
const { sendError } = require('../utils/responses');

/**
 * @notice Create an appointment and schedule reminder
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.createAppointment = async (req, res) => {
  const { title, contacts, description, start, reminderMinutes } = req.body;
  if (!title || !start) return sendError(res, 400, 'Title and start time required');
  const appointment = await Appointment.create({
    user: req.userId,
    title,
    contacts,
    description,
    start,
    reminderMinutes
  });
  scheduleReminder(appointment);
  res.json(appointment);
};

/**
 * @notice List appointments for the user
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.listAppointments = async (req, res) => {
  const appointments = await Appointment.find({ user: req.userId }).populate('contacts');
  res.json(appointments);
};
