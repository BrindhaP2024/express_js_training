const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'valid-token') {
    req.user = { id: 1, role: 'admin' };
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized - Please login first' });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden - Access denied' });
  }
};

app.get('/admin', authenticateUser, authorizeAdmin, (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard!' });
});

app.get('/admin/dashboard', authenticateUser, authorizeAdmin, (req, res) => {
  res.json({ message: 'Hi Admin...!' });
});

app.all('/users', (req, res) => {
  res.send('Users resource');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
