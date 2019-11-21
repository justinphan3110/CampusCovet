
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
    },
    topic: {
        type: String,
        default: 'random'
    },
    comments: {
        type: [commentSchema],
        default: []
    }
}, {versionKey: false});

module.exports = mongooes.model('complain', complainSchema);
