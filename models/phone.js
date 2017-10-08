var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    processor: {type: String, required: true},
    ram: {type: String, required: true},
    weight: {type: Number, required: true},
    brand: {type : String, required: true},
    dimension: {
        height:{type: Number, required: true},
        width:{type: Number, required: true}
    }
});

module.exports = mongoose.model('Phone', schema);
