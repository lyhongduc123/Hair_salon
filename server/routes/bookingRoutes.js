const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const data = {
        message: 'Login route'
    };
    res.send(data);
});

router.get('/', (req, res) => {
    const data = {
        message: 'Hello from the server!'
    };
    res.send(data);
});

module.exports = router;