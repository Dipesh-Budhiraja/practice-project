var passport=require('passport');
var LocalStartegy=require('passport-local');
var User= require('../models/user');

passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.deserializeUser(function(id,done){
    User.findById(id,function (err,result) {
        done(err,user);
    })
})

passport.use('local-signup',new LocalStrategy({
    usernameField:'username';
    
}))
