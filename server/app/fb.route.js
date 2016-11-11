var graph       = require('fbgraph');
var express = require('express');
var router = express.Router();
var conf = require('./config');



router.post('/user-info', function (req,res) {
    graph.setAccessToken(req.header('Authentication'));
    graph.get("/me?fields=first_name,last_name,email", function(err, response) {
        res.json(response);
    });
});

router.post('/check_auth', function (req,res) {
    res.json({auth:checkAuth()})

});

router.post('/logout', function (req,res) {
    graph.setAccessToken(null);
    res.json({auth:checkAuth()})

});



function checkAuth() {
    return graph.getAccessToken() != null ? true : false;
}
// router.get('/UserHasLoggedIn', function(req, res) {
//     console.log(req);
//     res.json({key:JSON.stringify(req)});
// });
module.exports = router;