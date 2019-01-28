const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('*', function(req, res){
    fs.readFile(__dirname + '/views/404.html', function(error, file){
        res.set('Content-Type', 'text/html');
        res.send(file);
    });
});

//
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     // 404
//     if (!course) {
//         res.status(404).send('The course with the given ID was not found.');
//     } else {
//         res.send(course);
//     }
// });
//
// app.post('/api/courses', (req, res) => {
//     const course = {
//       id: couses.length + 1,
//       name: req.body.name
//     };
//
//     courses.push(course);
//     res.send(course);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));