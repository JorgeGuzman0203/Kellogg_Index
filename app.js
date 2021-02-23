var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());


const http = require('http');
const path = require('path');


app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


const port = process.env.port || 3000;

app.listen(port, function(){
	console.log("Servidor Ok Puerto:" + port);
});
