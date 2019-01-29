const express = require('express');
const app = express();

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/nodejs");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/guestbook', (req, res) => {
    res.sendFile(__dirname + '/views/guestbook.html');
});

app.post("/addname", (req, res) => {

});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/views/404.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));