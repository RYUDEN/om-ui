var express = require('express');
var app = express();

app.use(express.static('./dist'));

app.listen(3333);

console.log('访问localhost:3333')
