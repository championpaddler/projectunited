const posts = require('../controllers/posts.controller.js');

module.exports = (app) => {
    app.get('/posts', posts.getPosts);
}