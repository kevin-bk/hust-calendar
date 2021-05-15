const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');

router.get('/planner', mainController.planner);

module.exports = router;
