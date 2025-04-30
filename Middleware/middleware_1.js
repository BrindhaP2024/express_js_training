const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  console.log('[App-Level] Time:', new Date().toISOString());
  next();
});

app.use('/user/:id', (req, res, next) => {
  console.log(`[App-Level] Accessed User ID: ${req.params.id}`);
  next();
});

function checkAuth(req, res, next) {
  if (req.headers['authorization']) {
    console.log('[Custom] Authorized request');
    next();
  } else {
    res.status(403).send('[Custom] Forbidden: No Authorization Header');
  }
}

app.use('/admin', (req, res, next) => {
  if (req.query.admin === 'true') {
    console.log('[Conditional] Admin access granted');
    next();
  } else {
    res.status(403).send('[Conditional] Access Denied: Not Admin');
  }
});

router.use((req, res, next) => {
  console.log('[Router-Level] Router Middleware');
  next();
});

router.get('/', (req, res) => {
  res.send('[Router-Level] Hello from Router');
});

app.use('/router', router);


app.use((err, req, res, next) => {
  console.error('[Error Handler]', err.stack);
  res.status(500).send('[Error] Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
