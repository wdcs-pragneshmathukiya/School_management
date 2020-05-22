var Exception = require("./model/exception");
var constant = require("./constant");

module.exports = {
    intrnlSrvrErr: function (err) {
        return new Exception(1, constants.MESSAGES.intrnlSrvrErr, err);
    },
    unauthoriseAccess: function (err) {
        return new Exception(2, constant.MESSAGES.unAuthAccess, err);
    },
    tokenGenException: function (err) {
        return new Exception(3, constant.MESSAGES.tokenGenError, err);
    },
    getCustomErrorException: function (errmsg, error) {
        return new Exception(5, errmsg, error);
    }
}