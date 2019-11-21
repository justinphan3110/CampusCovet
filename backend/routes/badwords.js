const fs = require('fs')
//Read from file, path may varies
var file = fs.readFileSync('D://campuskvetch/backend/routes/badwords.txt').toString('utf-8')
//Create array
var badWords = file.split(', ')

module.exports = badWords