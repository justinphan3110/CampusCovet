const express = require('express');
const app = express();
const mongoose = require('mongoose');
const complainsRoute = require('./routes/complains'); 
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

// Listtening on PORT 3001
app.listen(3001);

// Route
app.use('/complain', complainsRoute);



mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true}, 
    () => console.log('connected to MongoDB!')
);




