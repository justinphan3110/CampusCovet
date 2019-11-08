const mongooes = require('mongoose');

const commentSchema = mongooes.Schema({
    content: {
        type:String,
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

module.exports = {commentSchema}