
var express     = require('express');
var bodyParser  = require('body-parser');
var cors        = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./app.route'));
app.use(require('./db.route'));
app.use(require('./fb.route'));

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});