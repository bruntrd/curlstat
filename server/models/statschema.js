var mongoose=require("mongoose");

var StatSchema = new mongoose.Schema({
    lead: Array,
    second: Array,
    third: Array,
    skip: Array
});

module.exports= mongoose.model("Stats", StatSchema);