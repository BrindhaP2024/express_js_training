import express from 'express';

const app = express();

const port = 3000

app.get('/' ,(req,res) =>{
    res.send("Hello routes");
})
app.get('/about' ,(req,res) =>{
    res.send("Hello about route");
})
app.get('/contact' ,(req,res) =>{
    res.send("Hello contact route");
})
app.get('/user/:username',(req,res)=>{
    const username = req.params.username;
    res.send('check this user')
})
app.get('uesr/:username',(req,res) =>{
    const username = req.params.username;
    res.send('check this user for the valid inputs')
} )
app.get('/search',(req,res) =>{
    const keyword = req.query.keyword;
    res.send(`searching for ${keyword}`);
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


app.listen(port,()=>{
    console.log(`The server is running on the http://localhost:${port}`)
    
}) 

