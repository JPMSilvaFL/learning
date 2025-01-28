
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const env = require('dotenv').config();
mongoose.connect(process.env.connectString)
  .then(() => {
    console.log('Conectei à base de dados');
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.on('pronto', () => {
  app.listen(4000, () => {
    console.log('Acessar http://localhost:4000');
    console.log('Servidor executando na porta 4000');
  });
});