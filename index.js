var express = require('express');
var app = express();
var path = require('path');


// route pages
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.js'));
	console.log("file picked");
});


// what port to run server on
app.listen(3000, function () {
  console.log('server started on port 3001');
});