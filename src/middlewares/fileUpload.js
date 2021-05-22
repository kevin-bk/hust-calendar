const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/img/upload');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage }).single('avatar');

module.exports = function fileUpload(req, res, next) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
        } else if (err) {
            // An unknown error occurred when uploading.
        }
        if (req.file) {
            req.body.image = '/img/upload/' + req.file.filename;
            console.log('image: ' + req.body.image);
        }
        else {
            req.body.image = '';
        }
        next();
    })
}
