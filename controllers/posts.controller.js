const posts = require('../models/posts.model');

exports.getPosts = async (req, res) => {
    try {
        let result = await posts.find({}).sort({'votes':-1})
        res.send({'error':false,'results':result}).status(200);
    } catch (error) {
        console.log(error);
        res.send({'error':true}).status(400);
    }
}
