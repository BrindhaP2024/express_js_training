const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello express routing');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.post('/user', (req, res) => {
    const userData = req.body;
    res.send(`User data received: ${JSON.stringify(userData)}`);
});

app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.send(`User ID ${userId} updated with data: ${JSON.stringify(updatedData)}`);
});

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID ${userId} deleted`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
