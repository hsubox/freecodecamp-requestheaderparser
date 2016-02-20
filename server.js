'use strict';

var express = require('express');
var app = express();

// IP address, language and operating system for browser

app.get('/', function(req, res) {
  var url = req.url.substr(1);
  var obj = {
    "ipaddress": req.headers['x-forwarded-for'],
    "language": req.headers['accept-language'].split(',')[0],
    "software": req.headers['user-agent'].match(/\((.*?)\)/)[1]
  }
  
  res.send(JSON.stringify(obj));
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Server is listening on port ' + port + '.');
});