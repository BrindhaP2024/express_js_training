const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('performance check!');
});
app.get('/reliable',(req,res) =>{
    res.send("Perfomance reliability");
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const server = http.createServer(app);

function gracefulShutdown(signal) {
  console.log(`Received ${signal}. Closing HTTP server...`);
  
  server.close(() => {
    console.log('Closed all HTTP connections gracefully.');
    process.exit(0);
  });
  
  setTimeout(() => {
    console.error('Forcing shutdown with exit(1)');
    process.exit(1);
  }, 10000);
}

process.on('SIGINT', () => gracefulShutdown('SIGINT')); 
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
