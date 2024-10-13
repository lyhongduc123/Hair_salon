const express = require('express');
const router = express.Router();
const userController = require('../controllers/api/userController');

router.post('/login', userController.login);

router.post('/register', userController.register);

router.get('/', (req, res) => {
    const data = {
        message: 'Hello from the server!'
    };
    res.send(data);
});

module.exports = router;