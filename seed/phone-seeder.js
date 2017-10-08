var Phone = require('../models/phone');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/practice');

var phones = [
    new Phone({
        imagePath: 'http://cdn02.androidauthority.net/wp-content/uploads/2017/10/google-pixel-2-and-pixel-2-xl-hands-on-aa-11-of-23-840x473.jpg',
        title: 'Google Pixel 2',
        description: 'Awesome Phone',
        price: 649,
        processor: 'Snapdragon 835',
        ram: '4GB',
        weight: 150,
        brand: 'Google',
        dimension:{
            height: 10,
            width: 5
        }
    }),
    new Phone({
        imagePath: 'https://blogs-images.forbes.com/gordonkelly/files/2017/07/All-colours-1.jpg',
        title: 'Apple Iphone 8',
        description: 'Average Phone',
        price: 999,
        processor: 'A10',
        ram: '3GB',
        weight: 250,
        brand: 'Apple',
        dimension:{
            height: 12,
            width: 5
        }
    }),
    new Phone({
        imagePath: 'http://www.lg.com/us/images/cell-phones/md05820850/gallery/G6-D1.jpg',
        title: 'LG G6',
        description: 'Great Phone',
        price: 559,
        processor: 'Snapdragon 810',
        ram: '4GB',
        weight: 170,
        brand: 'LG',
        dimension:{
            height: 13,
            width: 6
        }
    }),
    new Phone({
        imagePath: 'http://www.samsung.com/global/galaxy/galaxy-s8/images/gallery/galaxy-s8_gallery_front_black_s4.png',
        title: 'Samsung S8+',
        description: 'Best Phone',
        price: 849,
        processor: 'Snapdragon 835',
        ram: '4GB',
        weight: 200,
        brand: 'Samsung',
        dimension:{
            height: 12,
            width: 6
        }
    }),
    new Phone({
        imagePath: 'http://img-us1.asus.com/A/show/AW000706/2016/1005/AM0000052/i201610AM050000052_14757150373537860012011.png',
        title: 'Asus Zenfone 3',
        description: 'Good Phone',
        price: 249,
        processor: 'Snapdragon 617',
        ram: '2GB',
        weight: 200,
        brand: 'Asus',
        dimension:{
            height: 13,
            width: 5
        }
    })

];

var done = 0;
for(var i = 0; i < phones.length; ++i){
    phones[i].save(function(){
        done++;
        if(done === phones.length){
            exit();
        }
    });//asynch so disconnect ho  jaega pehle
}

function exit(){
    mongoose.disconnect();
}
// mongoose.disconnect();
