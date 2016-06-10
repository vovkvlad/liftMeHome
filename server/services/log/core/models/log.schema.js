let mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    data: {
        type: Array
    }
});