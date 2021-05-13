const express = require('express');
const router = express.Router();

const Users = require('../api/user');

router.get('/getAllUsers', Users.getAllUsers);

module.exports = router;
