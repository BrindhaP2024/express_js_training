const express = require('express');
const app = express();
const fileRoutes = require('./routes');

app.use('/files', fileRoutes);
app.use('/upload',fileRoutes)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
