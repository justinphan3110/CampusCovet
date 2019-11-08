const express = require('express');
const router = express.Router();
const complainSchema = require('../models/complain');



router.post('/', async (req, res) => {
    const complain = new complainSchema({
        description: req.body.description
    });

    console.log(req.body)
    
    try{
        const  savedComplain = await complain.save();
        res.json(savedComplain); 
         
    }catch(err){
        res.json({message: err});
    }

});

module.exports = router; 