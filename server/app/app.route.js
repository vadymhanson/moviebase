var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({key:'Let\'s make it!'});
});

module.exports = router;