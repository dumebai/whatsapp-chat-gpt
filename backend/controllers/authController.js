const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');
const { generateToken } = require('../utils/token');
const { sendVerificationEmail } = require('../utils/email');
const { sendError } = require('../utils/responses');

/**
 * @notice Register a new user and send verification email
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return sendError(res, 400, 'User exists');
  const hash = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(20).toString('hex');
  const user = await User.create({ email, password: hash, verificationToken });
  if (process.env.TEST_MODE !== 'true')
    await sendVerificationEmail(email, verificationToken);
  res.json({ message: 'Registered, check email to verify' });
};

/**
 * @notice Verify a user's email
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.verify = async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({ verificationToken: token });
  if (!user) return sendError(res, 400, 'Invalid token');
  user.verified = true;
  user.verificationToken = undefined;
  await user.save();
  res.json({ message: 'Verified' });
};

/**
 * @notice Authenticate user and return JWT token
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @return {Promise<void>}
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return sendError(res, 400, 'Invalid credentials');
  const match = await bcrypt.compare(password, user.password);
  if (!match) return sendError(res, 400, 'Invalid credentials');
  if (!user.verified) return sendError(res, 403, 'Verify email');
  const token = generateToken({ id: user._id });
  res.json({ token });
};
