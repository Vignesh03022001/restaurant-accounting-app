var express = require('express');
const api = require('./controllers/controllers');
var app = express();
const port = 3000;

app.get('/hello',api.helloWorld)

app.listen(port,()=>{
console.log("App is running on port - "+port);
});