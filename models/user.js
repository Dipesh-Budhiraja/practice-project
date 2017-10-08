const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
// var bcrypt = require('bcrypt-nodejs');

var schema = mongoose.Schema({
    name:{type:String,required:true},
    mobileNo:{type:String,require:true},
    username:{type:String,require:true},
    password:{type:String,require:true}
});


schema.methods.encryptPassword=function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}

schema.methods.validatePassword=function (password) {
    return bcrypt.compareSync(password,this.password);
}

module.exports=mongoose.model('User',schema);
