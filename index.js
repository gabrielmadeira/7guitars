const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session=require("express-session");
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"br.+ma4:FqFvmK9?6/6}8:%?]Cq)[<XYy}2~n/^MWE!+D<;Z",
  resave:false,
  saveUninitialized:false
}
))

const routes = require('./routes/routes')


app.use(routes);


app.listen(3000);