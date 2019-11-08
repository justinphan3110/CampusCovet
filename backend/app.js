const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts'); 
const bodyParser = require('body-parser');
require('dotenv/config');


// Listtening on PORT 3001
app.listen(3001);
app.use(bodyParser.json());
app.use('/posts', postsRoute);



mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true}, 
    () => console.log('connected to MongoDB!')
);




