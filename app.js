var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var personasRouter = require('./routes/personas');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/personas', personasRouter);

//Se define el puerto a utilizar
const port = 2000;

//Se inicia el servicio de escucha
app.listen(port, ()=> {
    console.log('Escuchando en http://localhost:'+ port);
});

module.exports = app;
