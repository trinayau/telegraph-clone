const Post = require('../models/Post');

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);
    } catch(err){
        res.status(500).json({err})
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(book)
    } catch(err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        
    } catch(err) {

    }
}

module.exports = { index, show}
