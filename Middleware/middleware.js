const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


const mw = function (req, res, next) {
    console.log('Middleware function works here!! Please explore!!');
    next();
};

const sw = function (req, res, next) {
    console.log('Middleware function 1');
    next(); 
};
const cookies = function(req,res,next){
    console.log(req.cookieParser);
    next();
}
app.use(mw);
app.use(sw);
app.use(cookieParser());
app.use(cookies);
app.get('/', (req, res) => {
    res.send('Middleware Example');

});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


