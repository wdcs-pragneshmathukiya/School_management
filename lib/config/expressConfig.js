const express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

module.exports = function (app, env) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/', express.static(process.cwd() + '/public'));

    app.use(methodOverride(function (req, res) {
        if (req.body && req.body === 'object' && '_method' in req.body) {
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }))
}