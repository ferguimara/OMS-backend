var express = require('express');
var logger = require('morgan');
const cors = require('cors')

var ordersRouter = require('./routes/orders');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())

app.use('/api/orders', ordersRouter);

module.exports = app;
