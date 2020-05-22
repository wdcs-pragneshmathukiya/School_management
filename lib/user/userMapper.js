let userConstant = require("./userConstant");

function nameEmpty() {
    return {
        Status: userConstant.CODE.requiredField,
        Message: userConstant.MESSAGES.nameEmpty
    }
}
function emailEmpty() {
    return {
        Status: userConstant.CODE.requiredField,
        Message: userConstant.MESSAGES.emailEmpty
    }
}
function passEmpty() {
    return {
        Status: userConstant.CODE.requiredField,
        Message: userConstant.MESSAGES.passEmpty
    }
}
function registerSuccess() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.registerSuccess
    }
}
function userExist() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.userExist
    }
}
function registerErr(err) {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.registerErr,
        Error: err
    }
}

function loginSuccess(data) {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.loginSuccess,
        Token: data
    }
}
function userNotExist() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.passwordNotMatch
    }
}
function passwordNotMatch() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.passwordNotMatch
    }
}
function loginErr() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.loginErr
    }
}
function serverError() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.serverError
    }
}
function sendEmail() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.emailSend
    }
}
function notSendEmail() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.emailNotSend
    }
}
function purchase() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.purchase
    }
}
function notPurchase() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.notPurchase
    }
}
function dataNotFound() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.dataNotFound
    }
}
function dataNotGet() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.dataNotGet
    }
}
function addDataFav() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.addDataFav
    }
}
function alreadyAddFav() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.alreadyAddFav
    }
}
function notAddFav() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.notAddFav
    }
}
function errFavList() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.errFavList
    }
}
function removeFavCourse() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.removeFavCourse
    }
}
function errRemoveFavCourse() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.errRemoveFavCourse
    }
}
function importFile() {
    return {
        Status: userConstant.CODE.ok,
        Message: userConstant.MESSAGES.imporeFile
    }
}
function nofile() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.noFile
    }
}
function coruptFile() {
    return {
        Status: userConstant.CODE.badrequest,
        Message: userConstant.MESSAGES.coruptFile
    }
}

module.exports = {
    registerSuccess, userExist, registerErr, loginSuccess, userNotExist, passwordNotMatch,
    loginErr, serverError, sendEmail, notSendEmail, dataNotFound, purchase, notPurchase,
    addDataFav, alreadyAddFav, notAddFav, errFavList, removeFavCourse, errRemoveFavCourse,
    emailEmpty, passEmpty, nameEmpty, dataNotGet, nofile, coruptFile, importFile
}