var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({key:'Let\'s make it!'});
});

module.exports = router;