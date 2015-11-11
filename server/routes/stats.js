var express = require('express');
var router = express.Router();
var path = require('path');
var Stats = require('../models/statschema');

router.post('/', function(req,res,next){
    console.log("post request made");
    console.log(req.body);
    Stats.create(req.body,function(err,post){
        res.send('post created')
    });
    console.log('post made in db');
});

router.get('/', function(req,res,next){
    console.log("get request made");
    Stats.find(function(err,stats){
        res.json(stats);
    });
});

module.exports = router;