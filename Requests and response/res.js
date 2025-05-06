// res.app 
// res.headersSent
// res.locals
// res.append()
// res.attachment()
// res.cookie()
// res.clearCookie()
// res.download()
// res.end()
// res.format()
// res.get()
// res.json()
// res.jsonp()
// res.send()
// res.render()
// res.sendFile()
// res.set()
// res.type()
// res.status()
// res.locaton()
// res.redirect()
// res.sendStatus()
// res.sendFile()
// res.end()
// res.render()
// res.vary()


const express = require('express');
const app = express();



app.use(express.json());

app.get('/info', (req, res) => {
    res.append('Custom-Header', 'Value123');
    res.locals.user = '';
    res.cookie('session', 'abc123', { maxAge: 60000 });
    res.format({
        'text/plain': () => res.send('Plain Text Response'),
        'application/json': () => res.json({ message: 'JSON Response' })
    });
});

app.get('/file', (req, res) => {
    res.attachment('document.pdf');
    res.download('./sample.pdf');
});
app.get('/set-cookie',(req,res) =>{
    res.cookies('data','cookieValue',{maxAge :6000});
    res.send('cookies is set here')
})
app.post('/clear-cookie', (req, res) => {
    res.clearCookie('session');
    res.send('Session Cookie Cleared');
});

app.get('/status', (req, res) => {
    res.status(200).send('ok');
});

app.get('/headers', (req, res) => {
    console.log(res.headersSent);
    res.set('X-Custom-Header', 'custom-header');
    res.get('X-Custom-Header');
    res.send('Headers set');
});

app.get('/redirect', (req, res) => {
    res.location('/new-page');
    res.redirect('/new-page');
});
app.get('/new-page',(req,res) =>{
    res.end('This is the new page here ');
})

app.get('/sendfile', (req, res) => {
    res.sendFile(__dirname + '/res.js');
});

app.get('')
app.get('/vary', (req, res) => {
    res.vary('User-Agent');
    res.send('Vary header applied');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


