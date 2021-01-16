var mongoose = require("mongoose");

var schemacategory = new mongoose.Schema({

    user: String,
    pass: String
    
});
module.exports = mongoose.model("demo", schemacategory );