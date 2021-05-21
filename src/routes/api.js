const express = require('express');
const router = express.Router();

const Users = require('../api/user');
const Events = require('../api/event');

router.get('/getAllUsers', Users.getAllUsers);

router.post('/create-event', Events.create);
router.get('/delete-all-event', Events.deleteAll);
router.get('/test', Events.test);

module.exports = router;
