const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:{type:String,required:true},
    imamgePath:{type:String,required:true},
    dimension:{
        height:{type:Number,required:true},
        width:{type:Number,required:true},
    },
    brand:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
});

module.exports = mongoose.model('Tv',schema);
