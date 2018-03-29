const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const checkAuth = require('../middleware/check-auth');

router.post('/signup', userController.signup);

router.post('/login', userController.login)

router.delete('/:userId', checkAuth, userController.delete);

module.exports = router;