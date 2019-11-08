const mongooes = require('mongoose');

const complainSchema = mongooes.Schema({
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongooes.model('complain', complainSchema);