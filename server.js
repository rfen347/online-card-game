var express = require('express');
var app = express();
var socket = require('socket.io');
var db = require('mysql');

// app.get('/', function (req, res) {
//   // res.send('GET request to the homepage');
// });
app.use(express.static(__dirname));

app.listen(3000);
console.log("listening on port 3000");
