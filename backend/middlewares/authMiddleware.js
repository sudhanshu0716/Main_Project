const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with secret
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized access.' });
    }

    req.admin = decoded; // Attach admin data to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authenticateAdmin;
