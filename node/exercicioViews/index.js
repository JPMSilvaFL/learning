const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve('public')));

app.set('views', path.resolve(`src/views`));
app.set('view engine', 'ejs');

app.use(routes);



app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000');
});

