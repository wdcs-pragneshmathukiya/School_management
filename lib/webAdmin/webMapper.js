const webConstant = require("./webConstant");

function notExist() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notExist
    }
}
function tokenNotMatch() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.tokenNotExist
    }
}
function defferantEmail() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.defferentEmailAdd
    }
}
function addSuccess() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.addSuccessfully
    }
}
function notAdd() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notAdd
    }
}
function login(token) {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.login,
        Token: token
    }
}
function notLogin() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notLogin
    }
}
function passNotMatch() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.passwordNotMatch
    }
}
function deleteAdmin() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.delete
    }
}
function notDelete() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notDelete
    }
}
function update() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.update
    }
}
function notUpdate() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notUpdate
    }
}
function validationErr() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.validationErr
    }
}
function notViewCourseList() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notViewCourseList
    }
}
function notViewUserList() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.notViewUserList
    }
}
function adminDeleteUser() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.adminDeleteUser
    }
}
function adNotDeleteUser() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.adNotDeleteUser
    }
}
function adminUpdateUser() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.adminUpdateUser
    }
}
function adNotUpdateUser() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.adNotUpdateUser
    }
}
function adUpdateUserStatus() {
    return {
        Status: webConstant.CODE.ok,
        Message: webConstant.MESSAGE.adUpdateUserStatus
    }
}
function adNUpdateUserStatus() {
    return {
        Status: webConstant.CODE.badrequest,
        Message: webConstant.MESSAGE.adNUpdateUserStatus
    }
}


module.exports = {
    notExist, tokenNotMatch, defferantEmail, addSuccess, notAdd, login, notLogin, passNotMatch,
    deleteAdmin, notDelete, update, notUpdate, validationErr, notViewCourseList, notViewUserList,
    adminDeleteUser, adNotDeleteUser, adminUpdateUser, adNotUpdateUser, adUpdateUserStatus,
    adNUpdateUserStatus
}