var _ = require("lodash");
var userMapper = require("./userMapper");
var exception = require("../coustemException");
var userConstant = require("./userConstant");


function register(req, res, next) {

    let { name, email, password } = req.body;
    let error = [];
    if (!name) {
        error.push(userMapper.nameEmpty());
    } else if (!email) {
        error.push(userMapper.emailEmpty());
    } else if (!password) {
        error.push(userMapper.passEmpty());
    }

    if (error && error.length > 0) {
        validationError(error, next);
    } else {
        next();
    }
}

function validateLogin(req, res, next) {
    let { email, password } = req.body;
    let errors = [];
    if (_.isEmpty(email)) {
        errors.push(userMapper.emailEmpty());
    } else if (_.isEmpty(password)) {
        errors.push(userMapper.passEmpty());
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }

    next();
}


var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(exception.getCustomErrorException(userConstant.MESSAGES.VALIDATION_ERROR, errors));
    }
    next();
}

module.exports = {
    requiredCheck: register,
    validateLogin
}