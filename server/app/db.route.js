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
var prefixes = {
    title: "f", 
    description: "f", 
    category_name: "c", 
    actors: "a", 
    language_name: "l"
};
var fieldNames = {
    title: "title",
    description: "description",
    category_name: "name",
    actors: "last_name",
    language_name: "name"
};

router.get('/films/limit-:limit', function (req, res) {
    var limit = parseInt(req.params.limit);
    connection.query('SELECT f.*, c.name AS category_name, GROUP_CONCAT(DISTINCT a.first_name, \' \', a.last_name SEPARATOR \', \') AS actors, l.name AS language_name FROM film f ' +
        'LEFT JOIN film_category fc ON f.film_id = fc.film_id ' +
        'LEFT JOIN category c ON c.category_id = fc.category_id ' +
        'LEFT JOIN film_actor fa ON fa.film_id = f.film_id ' +
        'LEFT JOIN actor a ON a.actor_id = fa.actor_id ' +
        'LEFT JOIN language l ON l.language_id = f.language_id ' +
        'GROUP BY f.film_id, c.name ' +
        'limit ? ', [limit], function (err, results, fields) {
        res.json(results);
    });
});

router.post('/films/search', function (req, res) {
    var where = parseWhere(req.body);
    connection.query('SELECT f.*, c.name AS category_name, GROUP_CONCAT(DISTINCT a.first_name, \' \', a.last_name SEPARATOR \', \') AS actors, l.name AS language_name FROM film f ' +
        'LEFT JOIN film_category fc ON f.film_id = fc.film_id ' +
        'LEFT JOIN category c ON c.category_id = fc.category_id ' +
        'LEFT JOIN film_actor fa ON fa.film_id = f.film_id ' +
        'LEFT JOIN actor a ON a.actor_id = fa.actor_id ' +
        'LEFT JOIN language l ON l.language_id = f.language_id ' +
        'WHERE 1=1 ' + where +
        'GROUP BY f.film_id, c.name ' +
        'limit ? ', [10], function (err, results, fields) {
        res.json(results);
        createSearchLog(re)
    });
});

function createSearchLog(data) {
    connection.query('INSERT INTO `search_log` VALUES (NULL, "?", NULL, "?", "?", ?) ', data, function (err, results, fields) {
        console.log(results);
    });
}

function parseWhere(params) {
    var where = '';

    for (var field in params) {
        var value = params[field];
        if (value.length)
            where += "AND " + prefixes[field] + "." + fieldNames[field] + " LIKE '%" + value + "%' ";
    }
    return where;

}


//connection.close();
module.exports = router;