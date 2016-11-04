var FB = require('fb');
var express = require('express');
var router = express.Router();

router.post('/authentication', function (req, res) {
    res.json({key:'Let\'s make it!'});
});

module.exports = router;