const { verifyToken } = require('../utils/token');
const { sendError } = require('../utils/responses');

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return sendError(res, 401, 'No token');
  const token = header.split(' ')[1];
  const payload = verifyToken(token);
  if (!payload) return sendError(res, 401, 'Invalid token');
  req.userId = payload.id;
  next();
};
