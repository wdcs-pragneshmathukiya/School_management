var promise = require("bluebird");
var bcrypt = require("bcrypt");
var randomstring = require("randomstring");
var sha256 = require("sha256");


async function convertPass(req, res, next) {
    let pass = await bcrypt.hash(req.body.password, 13);
    req.body.password = pass;
    // console.log(req.body);
    next();
}
async function convertResetPass(password, next) {
    let pass = await bcrypt.hash(password, 13);
    password = pass;
    return password;
    // console.log(password);
    // next();
}

function verifyPassword(user, isExist) {
    return bcrypt.compare(user.password, isExist.password);
}

function getRefferCode() {
    return randomstring.generate({
        length: 7
    })
}

var getRandomPass = function () {
    return getsha256(Math.floor((Math.random() * 1000000) + 1));
}

var getsha256 = function (val) {
    return sha256(val + "password");
}

module.exports = {
    convertPass,
    verifyPassword,
    getRefferCode,
    getRandomPass,
    convertResetPass

}