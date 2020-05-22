var _ = require("lodash");
const courseConstant = require("./courseConstant");
const exception = require("../coustemException");
let courseDao = require("./courseDao")

function checkAccType(req, res, next) {
    let getToken = req.headers.authorization;
    courseDao.checkIfExist(getToken).then((data) => {
        if (data) {
            if (data.accountType === "TEACHER") {
                return next();
            } else {
                return res.json({ Message: courseConstant.MESSAGES.checkAccType });
            }
        } else
            return res.json({ Message: courseConstant.MESSAGES.tokenNotExist });
    }).catch(err => {
        return err;
    })
}

var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(exception.getCustomErrorException(courseConstant.MESSAGES.validationError, errors));
    }
    next();
}

module.exports = {
    validationError,
    checkAccType
}