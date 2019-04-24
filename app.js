const express = require('express');
const router  = require('./routes/routes');
const error404Controller = require('./controllers/404');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);

app.use(error404Controller);

app.listen(3000);