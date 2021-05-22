
class TestController{
    // [GET] /test 
    index(req, res, next){
        res.render('page/test', {
            layout: 'blank'
        })
    }
    upload(req, res, next){
        console.log(req.body.image);
    }
}

module.exports = new TestController;