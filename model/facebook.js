var mongoose = require("mongoose");

var fb = new mongoose.Schema({

    user: String,
    pass: String,

});
module.exports = mongoose.model("facebook", fb );