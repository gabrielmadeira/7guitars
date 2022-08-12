const db = require('../database');
const bcrypt= require('bcryptjs');

module.exports = class User {
    static loginCheck(user,password,req,res){
        db.execute(`select * from users where name ='${(user)}'`).then(
            result=>{
                bcrypt.compare(password,result[0][0].hash).then(
                    check=>{
                        if(check){
                            req.session.loggedIn=true;
                            req.session.name=result[0][0].name;
                            req.session.logged=true;
                            res.statusCode = 302;
                            res.setHeader('Location', '/home');
                            res.end();
                        }
                    }
                )
            }
        )
    }
    static signUp(area,hash,req,res){
        bcrypt.hash(hash,12).then((hashedPassword)=>{
            hash=hashedPassword;
            db.execute(`insert into ${(area)}(name,clearance,hash) values('${(req.body.name)}','${(req.body.clearence)}','${(hash)}')`).then(
              ()=>{
                db.execute(`select * from ${(area)} where name ='${(req.body.name)}'`).then(
                    result=>{
                        bcrypt.compare(req.body.password,result[0][0].hash).then(
                            check=>{
                                if(check){
                                    req.session.loggedIn=true;
                                    req.session.name=result[0][0].name;
                                    req.session.logged=true;
                                }
                            }
                        )
                    }
                )
              }  
            )
           
         })
    }
   
}

