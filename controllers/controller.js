const user = require('../models/user');

exports.login = (req, res) => {
    res.render('login', {
        pageTitle: "Login",
    })
}

exports.loginCheck = (req, res) => {
  user.loginCheck(req.body.area,req.body.name,req.body.password,req,res);
}

exports.signupShow = (req, res) => {
    res.render('signup', {
        pageTitle: "Sign-up",
    })
}

exports.createAccount = (req, res) => {
     let area=req.body.area;
     let hash=req.body.password;
     user.signUp(area,hash,req,res);   
}

exports.logoff = (req, res) => {
    req.session.destroy();
    res.statusCode = 302;
        res.setHeader('Location', '/login');
        res.end();

}
exports.isLogged=(req,res,next)=>{
    if(req.session.loggedIn){
        next();
    }
    else{
        res.statusCode = 302;
        res.setHeader('Location', '/login');
        res.end();
    }
}
exports.home=(req,res)=>{
    res.statusCode = 302;
    res.setHeader('Location', '/home');
    res.end();
}
exports.error404=(req,res)=>{
    res.statusCode=404;
    res.render('404', {
        pageTitle: "404",
    })
}




    



