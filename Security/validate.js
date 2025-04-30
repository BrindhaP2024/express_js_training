import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post('/submit', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Input is valid');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
