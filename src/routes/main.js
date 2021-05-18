const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');
const todoController = require('../controllers/todoController');

router.get('/todo-list', todoController.index);
router.post('/todo-list', todoController.create);
router.delete('/todo-list/:id', todoController.delete);
router.get('/', mainController.app);

module.exports = router;
