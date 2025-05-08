// req.headers
// req.path
// req.url
// req.app
// req.baseUrl
// req.body
// req.cookies
// req.host
// req.hostname
// req.ip 
// req.ips
// req.method
// req.originalUrl
// req.params
// req.path
// req.protocol
// req.query


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const resp = app.get('/info', (req, res) => {
    res.json({
        headers: req.headers,
        path: req.path,
        url: req.url,
        app: req.app.locals,
        baseUrl: req.baseUrl,
        body: req.body,
        cookies: req.cookies,
        host: req.get('host'),
        hostname: req.hostname,
        ip: req.ip,
        ips: req.ips,
        method: req.method,
        originalUrl: req.originalUrl,
        params: req.params,
        protocol: req.protocol,
        query: req.query,
        route:req.route
    });
});
console.log(resp)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');

});

