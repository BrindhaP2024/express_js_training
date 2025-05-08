const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/', (req, res) => {
    res.send('Welcome to the file upload API');
});

router.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

module.exports = router;




