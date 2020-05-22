const constant = require("./constant");
const excep = require("./coustemException");
const APIResponse = require("./model/APIResponse");

function hndlError(err, req, res, next) {
    sendError(req, res);
}

function sendError(res, err) {
    if (!err.errorCode) {
        console.error(err, "unhandled error");
        err = excep.intrnlSrvrErr(err);
    }
    var result = new APIResponse(constant.STATUS_CODE.ERROR, err);
    _sendResponse(res, result);
}

function sendSuccessWithMsg(res, msg) {
    var rslt = { message: msg };
    var result = new APIResponse(constant.STATUS_CODE.SUCCESS, rslt);
    _sendResponse(res, result);
}

function sendSuccess(res, rslt) {
    var result = new APIResponse(constant.STATUS_CODE.SUCCESS, rslt);
    _sendResponse(res, result);
}

module.exports = {
    hndlError, sendError, sendSuccessWithMsg, sendSuccess
}


function _sendResponse(res, rslt) {
    return res.send(rslt);
}