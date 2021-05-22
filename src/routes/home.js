const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');
const fileUpload = require('../middlewares/fileUpload');

router.get('/account',mainController.account);
router.post('/account/update', fileUpload, mainController.updateAccount);
router.get('/',mainController.index);

module.exports = router;
