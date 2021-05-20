const express = require('express');
const router = express.Router();

const Users = require('../api/user');
const Events = require('../api/event');

router.get('/getAllUsers', Users.getAllUsers);

router.get('/test', Events.test);

module.exports = router;
