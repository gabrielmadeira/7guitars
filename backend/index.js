const express = require('express');
const routes = require('./routes/routes')

const bodyParser = require('body-parser');
const path = require('path');
const session=require("express-session");
const { default: mongoose } = require('mongoose');

mongoose
    .connect("mongodb+srv://user:123@cluster0.lbbstum.mongodb.net/test", { useNewUrlParser: true })
    .then(()=>{
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(session({
         secret:"br.+ma4:FqFvmK9?6/6}8:%?]Cq)[<XYy}2~n/^MWE!+D<;Z",
         resave:false,
         saveUninitialized:false
        }))
        app.use(routes);
        app.listen(3000);
    })
