const mongoose = require('mongoose');
var uuid = require('uuid');

var schema = new mongoose.Schema({
    _id: { 
        type: String, 
        default: uuid.v1() },
    title : {
        type: String,
        required : true,
    },
    content : {
        type : String,
        require : true
    },
    imgUrl : String,
    refUrl : String,
    keyWords : String,
    likes : Number
});

const Blogdb = mongoose.model('blogs',schema);

module.exports = Blogdb;

