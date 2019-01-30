const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.DB_URL, (err, client) => {
    if (err) {
        return console.log(err);
    }

    db = client.db('guestbook');
    app.listen(port, () => console.log(`Listening on port ${port}`));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/guestbook', (req, res) => {
    res.sendFile(__dirname + '/views/guestbook.html');
});

app.get('/thanks', (req, res) => {
    res.sendFile(__dirname + '/views/thanks.html');
});

app.post("/addname", (req, res) => {
    db.collection('guests').save(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log('saved to database');
        res.redirect('/thanks')
    })
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/views/404.html');
});