const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./routes/posts.routes');
const app = express();
const mocker = require('./utilities/mocker');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbconfig = require('./config/database.config.js');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.dburl, {
    useNewUrlParser: true ,useUnifiedTopology: true
}).then(async () => {
    console.log("Successfully connected to the database. Firing Mockers");
    mocker.mocker();
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

posts(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

