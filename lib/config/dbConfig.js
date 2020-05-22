const mongoose = require("mongoose");
const promise = require("bluebird");

function connectDb(env, callback) {
    let dbName = env.mongo.dbName;
    let dbUrl = env.mongo.dbUrl;
    let dbOption = env.mongo.option;

    if (env.isProd) {
        console.log("Confoguring db in " + env.TAG + " mode");
        dbUrl = dbUrl + dbName;
    } else {
        console.log("configuring db in " + env.TAG + " mode");
        dbUrl = dbUrl + dbName;
        mongoose.set('debug', true);
    }

    console.log("Connecting to " + dbUrl);
    mongoose.connect(dbUrl, dbOption);

    mongoose.connection.on("connected", function () {
        console.log("Connected to DB ", dbName, " to ", dbUrl);
        callback();
    });
    mongoose.connection.on("error", function (err) {
        console.log("DB connection error" + err);
        callback(err);
    });
    mongoose.connection.on("diconnected", function () {
        console.log("Connection is disconnected");
        callback("Connection is disconnected");
    })
}

module.exports = connectDb;