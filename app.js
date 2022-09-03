var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParts = require ("./models/bodypartmodel");
const User = require('./models/userData');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const hbs = require('hbs');
const session = require('express-session');
const passport = require('passport');
const req = require('./models/api')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, 'public')));
hbs.registerPartials("views/partials")

//  passport authentication middleware

app.use(session({
  secret: 'onclickmedia',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.use(passport.initialize())
app.use(passport.session());



//  middleware for routing routes

// app.use('login', usersRouter);

app.use('/', usersRouter);
app.use('/', indexRouter);


// database connection
mongoose.connect("mongodb://localhost:27017/gymDB", () => {
  console.log("db connected");

  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
    
  //   // Create model for Body Part One time
  
  //   const data = res.body.forEach( el => {
  //     bodyParts[9].create(el);


  //   })

  // })

})

// })

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });




module.exports = app;
