const subConstant = require("./subConstant");

function login(detail) {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.login,
        Token: detail
    }
}
function passNotValid() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notValidPass
    }
}
function dataNotExist() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notExist
    }
}
function loginErr() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.loginErr
    }
}
function addAdmin() {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.addSubAdmin
    }
}
function subAdminNotAdd() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notAddSubAdmin
    }
}
function exist() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.exist
    }
}
function tokenNotExist() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.tokenNotExist
    }
}
function deleteAdmin() {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.deleteSubAdmin
    }
}
function notDelete() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notDeleteSub
    }
}
function updateStatus() {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.updateStatus
    }
}
function notUpdate() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notUpdateStatus
    }
}
function superAdminEdit() {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.supAdminEdit
    }
}
function subAdminEdit() {
    return {
        Status: subConstant.CODE.ok,
        Message: subConstant.MESSAGE.subAdminEdit
    }
}
function notEdit() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notEdit
    }
}
function notExist() {
    return {
        Status: subConstant.CODE.badrequest,
        Message: subConstant.MESSAGE.notExist
    }
}

module.exports = {
    login, passNotValid, dataNotExist, loginErr, addAdmin, subAdminNotAdd, exist,
    tokenNotExist, deleteAdmin, notDelete, updateStatus, notUpdate, superAdminEdit,
    subAdminEdit, notEdit, notExist
}