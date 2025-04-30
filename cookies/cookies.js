const express = require('express');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/set-cookie' ,(req,res) =>{
  res.cookie('user','checknewCookie');
  res.cookie('user', 'checkcookies', { maxAge: 3600000, httpOnly: true });
  res.send('Cookie has been set!');
});
app.get('/get-cookie',(req,res) =>{
    const user = req.cookies.user;
    if(user){
        res.send(`Hello ,${user}!`);
    }
    else{
        res.send('No user cookie found')
    }
});
app.get('/clear-cookie',(req,res) =>{
    res.clearCookie('user');
    res.send('cookies got cleared from the page!')
})

app.listen(3000,() =>{
    console.log('server running in the port 3000')
})


















// app.get('/clear-cookie', (req, res) => {
//     res.clearCookie('user');
//     res.send('Cookie has been cleared!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
