var express = require('express');
var app = express();

app.use(express.static('searchApp'));

app.get('/', function (req, res, next) {
    res.redirect('/');
});


app.listen(8090, 'localhost');
console.log('MyProject Server is Listening on port 8090');