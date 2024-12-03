const express = require("express");
const router = express.Router();
module.exports = router; //esporto sull'app principale

const posts = require("../posts");

//index --> GET
router.get('/', (req, res) => {
    res.json(posts);
})

//show --> GET
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const findPost = posts.find(curItem => curItem.id === postId);
    if(findPost) {
    res.json(findPost)}
    else {
        res.json(`Il post con id ${postId} non esiste`)
    };
})

//create --> POST
router.post('/', (req, res) => {
    res.json("Creazione del nuovo post");
})

//update --> PUT
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.json("Aggiornamento del post " + postId);
})

//destroy --> DELETE
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.json("Cancellazione del post " + postId);
})