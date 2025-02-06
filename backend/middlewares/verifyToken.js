const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // console.log('Cookies received:', req.cookies);
  // console.log('Headers:', req.headers);
  
  const token = req.cookies.token;
  if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      req.headers['x-forwarded-for'] = '203.0.113.1';
      next();
  } catch (err) {
      console.error('Token verification error:', err);
      res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = verifyToken