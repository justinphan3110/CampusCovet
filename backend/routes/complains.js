const express = require('express');
const router = express.Router();
const complainSchema = require('../models/complainModel');
const commentSchema = require('../models/commentModel');

const badWords = require('./badwords')


// Submit a complain post
router.post('/', async (req, res) => {
    let words = req.body.description.split(" ")
    let des = ''
    for (i in words) {
        if (badWords.includes(words[i].toLowerCase())) {
            des += '**** '
        }
        else des += (words[i] + ' ')
    }
    const complain = new complainSchema({
<<<<<<< HEAD
        description: des
=======
        description: req.body.description,
        topic: req.body.topic
>>>>>>> 2b12e793df4c92f255ca3d7ca482ed3e7efc1f08
    });
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
        const complains = await complainSchema.find().sort({date: -1});
        res.json(complains);
    }catch(err){
        res.json({message:err});
    }
})


// Specific complain post
router.get('/:complainId', async(req, res) => {
    try{
        const complain = await complainSchema.findById(req.params.complainId);
        res.json(complain);
    }catch (err) {
        res.json({message: err});
    }
});

//Get post by topic
router.get('/topic/:topic', async(req, res) => {
    try {
        //console.log(req.params.topic)
        const complains = await complainSchema.find(
            {topic: req.params.topic}).sort({date: -1});
        res.json(complains);
    }
    catch (err) {
        res.json({message:err});
    }
})

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
    for (i in badWords) {
        if (req.body.description.includes(badWords[i])) {
            req.body.description = req.body.description.replace(badWords[i], ' ****')
        }
    }
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $set: {description: req.body.description} }
        );
        res.json(updatedComplain)
    }catch (err){
        res.json({message: err});
    }
});

// Increase a like for a complain post
router.patch('/like/inc/:complainId', async (req, res) => {
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $inc: {like: 1}}
        );
        res.json(updatedComplain)

    }catch (err) {
        res.json({message: err});
    }
})

// Decrease  a like for a complain post
router.patch('/like/dec/:complainId', async (req, res) => {
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $inc: {like: -1}}
        );
        res.json(updatedComplain)

    }catch (err) {
        res.json({message: err});
    }
})

// Increase a dislike for a complain post
router.patch('/dislike/inc/:complainId', async (req, res) => {
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $inc: {dislike: 1}}
        );
        res.json(updatedComplain)

    }catch (err) {
        res.json({message: err});
    }
})

// Decrease  a dislike for a comaplain post
router.patch('/dislike/dec/:complainId', async (req, res) => {
    try{
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $inc: {dislike: -1}}
        );
        res.json(updatedComplain)

    }catch (err) {
        res.json({message: err});
    }
})



// Post a comment in a complain
router.post('/comment/:complainId', async (req, res) => {
    for (i in badWords) {
        if (req.body.content.includes(badWords[i])) {
            req.body.content = req.body.content.replace(badWords[i], ' ****')
        }
    }
    try  {
         
        const updatedComplain = await complainSchema.updateOne(
            {_id: req.params.complainId},
            { $push: {comments: {content: req.body.content}}}
         );

         res.json(updatedComplain)

    }catch (err) {
        res.json({message: err});
    }
});

// Delete a comment in a complain
router.delete('/comment/:complainId/:commentId', async (req, res) => {
    const complainId = req.params.complainId;
    const commentId = req.params.commentId;
    
    try{
        const removedComment = await complainSchema.updateOne(
            {_id: complainId},
            { $pull: {comments: {_id:  commentId}}}
        );
        res.json(removedComment)                                         
    }catch (err){
        res.json({message: err})
    }
    
});

module.exports = router; 