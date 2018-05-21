var mongoose = require('mongoose');

var postSchema = new Mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);
