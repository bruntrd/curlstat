var express = require('express')
var router = express.Router();
var path = require('path');
var Message = require('../models/contact');




router.post('/', function(req,res,next){
    console.log("post request made");
    Message.create(req.body,function(err,post){
        res.send("yes");
    });
  console.log("post hit", req.body);

});

router.get('/', function(req,res,next){
    console.log('were making an get request');
    Message.find(function(err,messages){
        res.json(messages);
    });

});

module.exports = router;