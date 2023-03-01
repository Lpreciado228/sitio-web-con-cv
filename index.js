const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile("D:/JS/HojadeVida/index.html");
});

app.listen(3000, function () {
  console.log('Servidor web de Express en funcionamiento en el puerto 3000.');
});