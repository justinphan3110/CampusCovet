const fs = require('fs')
<<<<<<< HEAD
//Read from file, path may varies
var file = fs.readFileSync('D://campuskvetch/backend/routes/badwords.txt').toString('utf-8')
//Create array
var badWords = file.split(', ')
=======
var file = fs.readFileSync('/home/lnp26/github/campuskvetch/backend/routes/badwords.txt').toString('utf-8')
var badWords = file.split(',')
>>>>>>> 2b12e793df4c92f255ca3d7ca482ed3e7efc1f08

module.exports = badWords