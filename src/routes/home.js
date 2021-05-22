const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');

router.get('/account',mainController.account);
router.get('/',mainController.index);

module.exports = router;
