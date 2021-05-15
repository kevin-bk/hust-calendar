const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');

router.get('/planner', mainController.planner);
router.get('/todo-list', mainController.todoList);

module.exports = router;
