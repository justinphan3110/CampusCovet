const mongooes = require('mongoose');

const complainSchema = mongooes.Schema({
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
}, {versionKey: false});

module.exports = mongooes.model('complain', complainSchema);