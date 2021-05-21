const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');

router.get('/',LoginController.index);
router.get('/logout',LoginController.logout);
router.post('/',LoginController.login);
router.post('/signup',LoginController.signup);

module.exports = router;
