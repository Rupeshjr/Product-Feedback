// middlewares/authMiddleware.js
require('dotenv').config();

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token !== process.env.AUTH_TOKEN) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  next(); // Token is valid
}

module.exports = authenticateToken;
