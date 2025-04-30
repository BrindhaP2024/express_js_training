const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const user = {
  username: 'admin',
  password: 'password123'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
