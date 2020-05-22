const _ = require("lodash");
const path = require("path");
const dbConfig = require("./dbConfig");
const expressConfig = require("./expressConfig");
var environment = process.env.NODE_ENV || 'dev';
var envConfig = {};
var cfg = {};


switch (environment) {
    case 'dev':
    case 'devloment':
        envConfig = require("./env/devlopment");
        break;
    case 'prod':
    case 'production':
        envConfig = require("./env/production");
        break;
    case 'stag':
    case 'staging':
        envConfig = require("./env/staging");
        break;
}

var defaultConfig = {
    environment: "devlopment",
    ip: "localhost",
    port: 4009,
    protocol: "http",
    TAG: "development",
    uploadDir: path.resolve("./uploads"),
    mongo: {
        dbName: "school",
        dbUrl: "mongodb://localhost:27017/"
    }
}

var cfg = _.extend(defaultConfig, envConfig);

module.exports = {
    cfg, dbConfig, expressConfig
}