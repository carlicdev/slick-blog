const express = require('express');
const path = require('path');
const morgan = require('morgan');

const routes = require('../routes/index');

module.exports = app => {

    // Settings
    app.set('port', process.env.PORT || 5000);

    // Middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Serve React static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Routes
    routes(app);

    return app;
}