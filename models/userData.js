const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

const userSchema = mongoose.Schema({
    username: String,
    password: String
})
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


module.exports = User;