var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    person: String,
    message: String
});

module.exports = mongoose.model("Message", MessageSchema);