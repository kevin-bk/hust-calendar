const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');
const fileUpload = require('../middlewares/fileUpload');

var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/img');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

var upload = multer({ storage: storage }).single('avatar');

router.get('/account',mainController.account);
router.post('/store', function (req, res, next) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
        } else if (err) {
        }
        if (req.file){
            req.body.image = '/img/' + req.file.filename;
        }
        else req.body.image = '';
        console.log(req.body);
        // next();
    })
}, mainController.updateAccount);
router.get('/test',mainController.test);
router.get('/',mainController.index);

module.exports = router;
