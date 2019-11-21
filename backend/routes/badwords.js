const fs = require('fs')
var file = fs.readFileSync('/home/lnp26/github/campuskvetch/backend/routes/badwords.txt').toString('utf-8')
//var file = fs.readFileSync('D://campuskvetch/backend/routes/badwords.txt').toString('utf-8')
var badWords = file.split(', ')

module.exports = badWords