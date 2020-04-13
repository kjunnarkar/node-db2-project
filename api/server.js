const express = require('express');
const morgan = require('morgan');

const carsRouter = require('../cars/cars-router');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('Cars API is running');
});

module.exports = server;
