const mongoose = require('mongoose');

var schema = mongoose.Schema({
    imagePath:{type:String,required :true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    processor: {type: String, required: true},
    ram: {type:String,required:true},
    opersys: {type:String,required:true},
    graphicCard: {type:String,required:true},
    hardDisk:{type:String,required:true},
    brand: {type: String, required: true},
    screenSize:{type:Number,required:true}
});

module.exports = mongoose.model('Laptop',schema);
