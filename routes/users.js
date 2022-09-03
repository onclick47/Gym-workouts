var express = require('express');
var router = express.Router();
const User = require('../models/userData')
const session = require('express-session')
const passport = require('passport');


/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});


// log user fron login page. */
router.post('/login', function (req, res, next) {
  const user = User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, err => {
    if (err) {
      console.log(err)
    } else {

      passport.authenticate("local")(req, res, function () {
        res.redirect('/');
      });

    }
  })

})

/* GET register page. */
router.get('/register', function (req, res, next) {
  res.render('register');
});


// add user from register page. */
router.post('/register', function (req, res, next) {
  User.register({ username: req.body.username }, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect('/register')
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      })
    }
  })

})


router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

module.exports = router;



