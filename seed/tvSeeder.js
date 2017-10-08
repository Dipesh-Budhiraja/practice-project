var Tv = require('../models/television');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/practice');

var tvs = [
    new Tv({
        imagePath: 'https://rukminim1.flixcart.com/image/704/704/television/z/b/6/samsung-32j4003-original-imaezvg8eynmheds.jpeg?q=70',
        title: 'SONY Bravia',
        description: 'Awesome TV!!!!',
        price: 100000,
        // dimension: {height10,10},
        dimension: {height:11,width:12},
        brand:'sony'
    }),
    new Tv({
        imagePath: 'https://rukminim1.flixcart.com/image/704/704/television/z/b/6/samsung-32j4003-original-imaezvg8eynmheds.jpeg?q=70',
        title: 'Samsung Curve LED',
        description: 'Super Awesome TV!!!!',
        price: 100000,
        dimension: {height:11,width:12},
        brand:'sony'
    }),
    new Tv({
        imagePath: 'http://eventsbyfabulous.com/wp-content/uploads/2013/09/samsung-tv-front.jpg',
        title: 'LG LED',
        description: 'Bekaar TV!!!!',
        price: 100000,
        dimension: {height:11,width:12},
        // dimension: {10,11},
        brand:'LG'
    }),
    new Tv({
        imagePath: 'https://rukminim1.flixcart.com/image/1408/1408/television/b/c/3/micromax-32-canvas-original-imaehevswh2enzqz.jpeg?q=90',
        title: 'SONY Bravia 52D',
        description: 'NICE TV!!!!',
        price: 100000,
        // dimension: {11,12},
        dimension: {height:11,width:12},

        brand:'SONY'
    }),
    new Tv({
        imagePath: 'http://www.lg.com/in/images/tvs/md05603621/gallery/Large-940x620-gal-2ab.jpg',
        title: 'LG WALLPAPER TV',
        description: 'Bc yeh kya bana diya!!!!',
        price: 100000,
        // dimension: {15,15},
        dimension: {height:11,width:12},
        brand:'LG'
    })
];

var done=0;
for (var i = 0; i < tvs.length; i++) {
    tvs[i].save(function(err,result){
        done++;
        if (done === tvs.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
