/**
 * @notice Helper to send error responses
 * @param {Object} res Express response
 * @param {number} status HTTP status code
 * @param {string} message Error message
 */
function sendError(res, status, message) {
  res.status(status).json({ message });
}

module.exports = { sendError };
