var graph       = require('fbgraph');
var express = require('express');
var router = express.Router();
var conf = require('./config');


router.get('/auth/facebook', function(req, res) {
    if (!req.query.code) {
        var authUrl = graph.getOauthUrl({
            "client_id":     conf.client_id
            , "redirect_uri":  conf.redirect_uri
            , "scope":         conf.scope
        });

        if (!req.query.error) { //checks whether a user denied the app facebook login/permissions 
            res.redirect(authUrl);
        } else {  //req.query.error == 'access_denied' 
            res.send('access denied');
        }
        return;
    }

    graph.authorize({
        "client_id":      conf.client_id
        , "redirect_uri":   conf.redirect_uri
        , "client_secret":  conf.client_secret
        , "code":           req.query.code
    }, function (err, facebookRes) {
        console.log(facebookRes);
        graph.setAccessToken(facebookRes.access_token);
        res.redirect('http://localhost:3000/');
    });


});

router.post('/userInfo', function (req,res) {
    var auth = checkAuth();
    if(auth){
        graph.get("/me", function(err, response) {
            res.json({auth:auth,response:response,dfhkdfjh:graph.getAccessToken()});
        });
    }
    else {
        res.json({auth:auth})
    }

});

router.post('/check_auth', function (req,res) {
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