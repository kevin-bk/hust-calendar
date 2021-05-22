const express = require('express');
const router = express.Router();
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

const testController = require('../controllers/TestController');

router.post('/store', function (req, res, next) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
           console.log('empty');
        } else if (err) {
            console.log('empty2');
        }
        if (req.file){
            req.body.image = '/img/' + req.file.filename;
        }
        else req.body.image = '';
        console.log(req.body);
        // next();
    })
}, testController.upload);
router.get('/', testController.index);

module.exports = router;
