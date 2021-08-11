const express = require('express');
const nunjucks = require('nunjucks');

// creating http server
var app = express();

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("users");

const PORT = '8000';

let data = [];


// configuring the public folder (where the files will stay on the server.)
app.use(express.static("public"));
app.use(express.json({ limit: '256mb' }))

// configuring template engine 
nunjucks.configure("pages", {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');

// creating GET route to http://localhost:PORT/ route
app.get('/', (req, res) => { 
    // whenever there is a call to this route, the index.html will be rendered with the "data" data
    res.render('index.html');
});

// creating POST route to http://localhost:PORT/ route
app.post('/createUser', (req, res) => {
    // adding new profile and resending updated html
    let new_profile = req.body;

    console.log(new_profile)

    res.render('index.html');
});

app.get('/users', (req, res) => {

    console.log(data);
    res.render('datas.html', { data });
});

app.get('/createUser', (req, res) =>{

    res.render('loginCreate.html');
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});