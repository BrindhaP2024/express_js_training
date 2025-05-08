const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) return res.status(404).send('User not found');

  users[userIndex] = { id: userId, name };
  res.json(users[userIndex]);
});

// DELETE: Remove a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.status(204).send(); // No content
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
