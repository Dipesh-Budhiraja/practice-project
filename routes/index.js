var express = require('express');
var router = express.Router();
var Phones = require('../models/phone');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Express' });
});

router.get('/phone',function(req,res,next){
    var phones=Phones.find(function(err,result){
        var productchunks=[];
        var chunkSize=3;
        for (var i = 0; i < result.length; i+=chunkSize) {
            productChunks.push(result.slice(i,i+chunkSize));
        }
        res.render('shop/phone',{title:'Phones',products:productChunks});
    })
})
module.exports = router;
