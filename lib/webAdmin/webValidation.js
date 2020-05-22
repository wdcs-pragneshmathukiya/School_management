const promise = require("bluebird");
const _ = require("lodash");

const webDao = require("./webDao");
const webMapper = require("./webMapper");

function validation(req, res, next) {
    let token = req.headers.authorization;
    return webDao.tokenExist(token).then(exist => {
        if (exist.type == "ADMIN")
            return next();
        else {
            return webMapper.validationErr();
        }
    });
}

module.exports = {
    validation
}