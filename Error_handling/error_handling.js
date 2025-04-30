const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err); 
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.get('/error',(req,res,next) =>{
    res.status(err.status || 404).json({
        message:err.message || 'Not Found',
        stack:process.env.NODE_ENV === 'development'
    });

})