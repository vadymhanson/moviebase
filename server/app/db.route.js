var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var config = require('./config');
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

router.get('/films/limit-:limit', function (req, res) {
    var limit = parseInt(req.params.limit);
    connection.query('SELECT * from film limit ?', [limit], function (err, results, fields) {
        res.json(results);
        connection.close();
    });
});



module.exports = router;