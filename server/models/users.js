var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    team: String
});

module.exports(mongoose.model("User", UserSchema));