//const badWords = ['nigga', 'fuck off', 'asshole', 'motherfucker']
const fs = require('fs')
var file = fs.readFileSync('D://campuskvetch/backend/routes/badwords.txt').toString('utf-8')
var badWords = file.split(',')

module.exports = badWords