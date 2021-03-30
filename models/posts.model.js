const mongoose = require('mongoose');

const posts = mongoose.Schema({
    title: String,
    votes: Number,
});

module.exports = mongoose.model('posts', posts);