var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index= require('./routes/index');
var messages = require('./routes/messages');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Personal_Project');


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'),function(){
    console.log('listening on port' + app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));
app.use('/messages', messages);
app.use('/', index);

module.exports = app;