const posts = require('../models/posts.model');

module.exports = {
    mocker:  function() {
        setInterval(async function(){
            let results = await posts.find({});
            let index = Math.floor(Math.random()*results.length);
            let post  = results[index];
            post.votes  = post.votes + Math.floor(Math.random()*10);
            await post.save();
        },3000);
    }
}



