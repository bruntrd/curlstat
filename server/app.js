var express = require('express');
var app = express();
var index= require('./routes/index');
var application = require('./routes/application');

app.use('/application', application);
app.use('/', index);
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'),function(){
    console.log('listening on port' + app.get('port'));
});

module.exports = app;