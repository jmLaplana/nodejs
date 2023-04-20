var express = require('express');
var app = express();
var fs = require("fs");

var client = {
   "client6" : {
      "name" : "Tobias Clements",
      "studentnumber" : "20200000678",
      "email" : "tClements678@gmail.com",
	  "address" : "Las Lomas, Peru",
      "id": 6
   }
}

app.get('/listClient', function (req, res) {
   fs.readFile( __dirname + "/" + "clients.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addClient', function (req, res) {
   fs.readFile( __dirname + "/" + "clients.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["client4"] = client["client4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "clients.json", 'utf8', function (err, data) {
      var clients = JSON.parse( data );
      var client = clients["client" + req.params.id] 
      console.log( client );
      res.end( JSON.stringify(client));
   });
})

app.delete('/deleteClient', function (req, res) {
   fs.readFile( __dirname + "/" + "clients.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["client" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "clients.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["client" + req.params.id];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})