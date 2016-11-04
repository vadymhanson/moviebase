var fs = require('fs');
var mysql = require('mysql2');

var dbSchema = fs.readFileSync('./sakila-schema.sql');
var dbData = fs.readFileSync('./sakila-data.sql');


var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'sakila',
    password: 'W02011988'
});

connection.query(dbSchema.toString(), function (err, results, fields) {
    console.log(err);
    connection.close();
});
