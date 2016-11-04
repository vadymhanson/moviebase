
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'sakila',
    password: 'W02011988'
});

connection.query('SELECT * from film limit 10', function (err, results, fields) {
    console.log(results);
    connection.close();
});

var app = express();

app.use(require('./app.route'));
//app.use(require('./fb.route'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});