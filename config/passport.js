var passport=require('passport');
var LocalStartegy=require('passport-local');
var User= require('../models/user');

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,function (err,result) {
        done(err,user);
    });
});

passport.use('local-signup',new LocalStrategy({
    usernameField:'email',
    passwordField: 'password',
    mobileNoField: 'mobileNo',
    nameField: 'name',
    passReqToCallback: true
}, function(req, email, password, mobileNo, name, done){
    req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid Password').notEmpty().isLength({min: 4});
    req.checkBody('mobileNo', 'Invalid Mobile Number').notEmpty().isLength({min: 8});
    req.checkBody('name', 'Please Fill Name field').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error){
            messages.push(errors.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return done(null, false, {message: 'Email is already in use.'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result){
            if(err){
                done(err);
            }
            return done(null, newUser);
        });
    });
}));

passport.use('local-signin', new LocalStrategy({
    usernameField:'email',
    passwordField: 'password',
    mobileNoField: 'mobileNo',
    nameField: 'name',
    passReqToCallback: true
}, function(req, email, password, done){
    req.checkBody('email', 'Invalid Email').notEmpty();
    req.checkBody('password', 'Invalid Password').notEmpty();
    req.checkBody('mobileNo', 'Invalid Mobile Number').notEmpty();
    req.checkBody('name', 'Please Fill Name field').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'username': username}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'No User Found.'});
        }
        if(!user.validatePassword(password)){
            return done(null, false, {message: 'Wrong Password'});
        }
        return done(null, user);
    });
}));

