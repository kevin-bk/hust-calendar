const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');
const todoController = require('../controllers/todoController');

router.get('/planner', mainController.planner);
router.get('/todo-list', todoController.index);
router.post('/todo-list', todoController.create);

module.exports = router;
