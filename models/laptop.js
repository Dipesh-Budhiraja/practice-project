const mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: {type:String,required:true},
    imagePath:{type:String,required :true},
    description: {type:String,required:true},
    OperSys: {type:String,required:true},
    price: {type:Number,required:true},
    RAM: {type:String,required:true},
    GraphicCard: {type:String,required:true},
    hardDisk:{type:String,required:true},
    ScreenSize:{type:String,required:true},
});

module.exports = mongoose.model('Lappy',schema);
