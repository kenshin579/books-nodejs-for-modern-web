var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: {
        type: Date,
        default: Date.now,
        required: 'Must have start date - default value is the created date'
    }

});

module.exports = mongoose.model('book', bookSchema);
