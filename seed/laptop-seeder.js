var Laptop = require('../models/laptop');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/practice');

var laptops = [
    new Laptop({
        imagePath: 'https://c.s-microsoft.com/en-us/CMSImages/Surface_Book_MosaicPanelFeatures_Main-V1.jpg?version=d5c58215-85d3-ba1c-bb4c-22c1de957fba',
        title: 'Surface Book ',
        description: 'Awesome Laptop',
        price: 1299,
        processor: 'i7',
        ram: '8GB',
        opersys: 'Windows10',
        graphicCard: 'Nvidia GTX 1050',
        hardDisk: '7200rpm',
        brand: 'Microsoft',
        screenSize: 13
    }),
    new Laptop({
        imagePath: 'https://c.s-microsoft.com/en-us/CMSImages/Surface_Book_MosaicPanelFeatures_Main-V1.jpg?version=d5c58215-85d3-ba1c-bb4c-22c1de957fba',
        title: 'Apple MacBook Air',
        description: 'Average Laptop',
        price: 10299,
        processor: 'i3',
        ram: '2GB',
        opersys: 'MacOs',
        graphicCard: 'Integrated Graphics',
        hardDisk: '5400rpm',
        brand: 'Aple',
        screenSize: 13
    }),
    new Laptop({
        imagePath: 'https://c.s-microsoft.com/en-us/CMSImages/Surface_Book_MosaicPanelFeatures_Main-V1.jpg?version=d5c58215-85d3-ba1c-bb4c-22c1de957fba',
        title: 'HP Omen',
        description: 'Gaming Laptop',
        price: 1799,
        processor: 'i7',
        ram: '16GB',
        opersys: 'Windows10',
        graphicCard: 'Nvidia GTX 1080',
        hardDisk: '7200rpm',
        brand: 'HP',
        screenSize: 13
    }),
    new Laptop({
        imagePath: 'https://c.s-microsoft.com/en-us/CMSImages/Surface_Book_MosaicPanelFeatures_Main-V1.jpg?version=d5c58215-85d3-ba1c-bb4c-22c1de957fba',
        title: 'Dell Latitude',
        description: 'Good Laptop',
        price: 1299,
        processor: 'i5',
        ram: '8GB',
        opersys: 'Windows10',
        graphicCard: 'Nvidia GTX 940',
        hardDisk: '7200rpm',
        brand: 'Dell',
        screenSize: 13
    }),
    new Laptop({
        imagePath: 'https://c.s-microsoft.com/en-us/CMSImages/Surface_Book_MosaicPanelFeatures_Main-V1.jpg?version=d5c58215-85d3-ba1c-bb4c-22c1de957fba',
        title: 'Asus Rog',
        description: 'Great Laptop',
        price: 1399,
        processor: 'i7',
        ram: '8GB',
        opersys: 'Windows10',
        graphicCard: 'Nvidia GTX 960',
        hardDisk: '7200rpm',
        brand: 'Asus',
        screenSize: 13
    })
];

var done = 0;
for(var i = 0; i < laptops.length; ++i){
    laptops[i].save(function(){
        done++;
        if(done === laptops.length){
            exit();
        }
    });//asynch so disconnect ho  jaega pehle
}

function exit(){
    mongoose.disconnect();
}
// mongoose.disconnect();
