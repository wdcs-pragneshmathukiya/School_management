const promise = require("bluebird");
const _ = require("lodash");

const subService = require("./subService");
const subMapper = require("./subMapper");

function login(detail) {
    return subService.login(detail).then(result => {
        if (result.token)
            return subMapper.login(result.token);
        else if (result == 1)
            return subMapper.passNotValid();
        else if (result == 2)
            return subMapper.dataNotExist();
        else
            return subMapper.loginErr();
    }).catch(err => {
        return subMapper.loginErr();
    })
}

function addSubAdmin(detail, token) {
    return subService.addSubAdmin(detail, token).then(result => {
        if (result == 1)
            return subMapper.addAdmin();
        else if (result == 2)
            return subMapper.subAdminNotAdd();
        else if (result == 3)
            return subMapper.exist();
        else if (result == 4)
            return subMapper.tokenNotExist();
        else
            return subMapper.subAdminNotAdd();
    }).catch(err => {
        return subMapper.subAdminNotAdd();
    })
}

function deleteAdmin(id) {
    return subService.deleteAdmin(id).then(result => {
        if (result == 1)
            return subMapper.deleteAdmin();
        else
            return subMapper.notDelete();
    }).catch(err => {
        return subMapper.notDelete();
    })
}

function changeStatus(id, status) {
    return subService.changeStatus(id, status).then(result => {
        if (result == 1)
            return subMapper.updateStatus();
        else return subMapper.notUpdate();
    }).catch(err => {
        return subMapper.notUpdate();
    })
}

function superAdminEdit(id, data) {
    return subService.superAdminEdit(id, data).then(result => {
        if (result == 1)
            return subMapper.superAdminEdit();
        else
            return subMapper.notEdit();
    }).catch(err => {
        return subMapper.notEdit();
    });
}

function subAdminEdit(id, token, data) {
    return subService.subAdminEdit(id, token, data).then(result => {
        if (result == 1)
            return subMapper.subAdminEdit();
        else
            return subMapper.notEdit();
    }).catch(err => {
        return subMapper.notEdit();
    })
}

function viewList() {
    return subService.viewList().then(result => {
        if (result.data)
            return result.data;
        else
            return subMapper.notExist();
    }).catch(err => {
        return subMapper.notExist();
    })
}

module.exports = {
    addSubAdmin, login, deleteAdmin, changeStatus, superAdminEdit, viewList, subAdminEdit
}