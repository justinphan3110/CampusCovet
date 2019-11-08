const express = require('express');
const router = express.Router();
const complainSchema = require('../models/complain');

// Submit a complain post
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


// GET All the complains
router.get('/', async (req, res) => {
    try{
        const complains = await complainSchema.find();
        res.json(complains);
    }catch(err){
        res.json({message:err});
    }
})


// Specific complain post
router.get('/:complainId', async(req, res) => {
    try{
        const complain = await complainSchema.findById(req.params.complainId);
        res.json(post);
    }catch (err) {
        res.json({message: err});
    }
});

// Delete complain post
router.delete('/:complainId', async (req, res) => {
    try {
        const removedPost = await complainSchema.remove({
            _id: req.params.complainId
        });

        res.json(removedPost);
    }catch (err){
        res.json({message: err});
    }
});


//Update a post
router.patch('/:complainId', async (req, res) => {
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $set: {description: req.body.description} }
        );
        res.json(updatedComplain)
    }catch (err){
        res.json({message: err});
    }
})

module.exports = router; 