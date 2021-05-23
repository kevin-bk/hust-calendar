const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/AdminController');
const requireAdmin = require('../middlewares/requireAdmin');

router.get('/dashboard', requireAdmin, AdminController.dashboard);
router.get('/login',AdminController.index);
router.get('/lock-user/:id',AdminController.lockUser);
router.get('/unlock-user/:id',AdminController.unLock);
router.get('/logout',AdminController.logout);
router.post('/login',AdminController.login);

module.exports = router;
