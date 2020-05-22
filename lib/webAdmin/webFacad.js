const promise = require("bluebird");
const _ = require("lodash");

const webService = require("./webService");
const webMapper = require("./webMapper");

function addWebAdmin(detail) {
    return webService.addWebAdmin(detail).then(result => {
        if (result == 1)
            return webMapper.defferantEmail();
        else if (result == 2)
            return webMapper.addSuccess();
        else
            return webMapper.notAdd();
    }).catch(err => {
        return webMapper.notAdd();
    })
}

function login(detail) {
    return webService.login(detail).then(result => {
        if (result.token != null)
            return webMapper.login(result.token);
        else if (result == 1)
            return webMapper.passNotMatch();
        else if (result == 2)
            return webMapper.notExist();
        else
            return webMapper.notLogin();
    }).catch(err => {
        return webMapper.notLogin();
    })
}

function deleteAdmin(id, token) {
    return webService.deleteAdmin(id, token).then(result => {
        if (result == 1)
            return webMapper.deleteAdmin();
        else if (result == 2)
            return webMapper.notExist();
        else if (result == 3)
            return webMapper.tokenNotMatch();
        else
            return webMapper.notDelete();
    }).catch(err => {
        return webMapper.notDelete();
    })
}

function editAdmin(id, detail, token) {
    return webService.editAdmin(id, detail, token).then(result => {
        if (result == 1)
            return webMapper.update();
        else if (result == 2)
            return webMapper.notExist();
        else if (result == 3)
            return webMapper.tokenNotMatch();
        else
            return webMapper.notUpdate();
    }).catch(err => {
        return webMapper.notUpdate();
    })
}

function viewCourseList(req) {
    return webService.viewcourseList(req).then(result => {
        if (result.list != null)
            return result.list;
        else
            return webMapper.notExist();
    }).catch(err => {
        return webMapper.notViewCourseList();
    });
}

function viewUserList() {
    return webService.viewUserList().then(result => {
        if (result.list != null)
            return result.list;
        else
            return webMapper.notExist();
    }).catch(err => {
        return webMapper.notViewUserList();
    });
}

function adminDeleteUser(id) {
    return webService.adminDeleteUser(id).then(result => {
        if (result == 1)
            return webMapper.adminDeleteUser();
        else if (result == 2)
            return webMapper.notExist();
        else
            return webMapper.adNotDeleteUser();
    }).catch(err => {
        return webMapper.adNotDeleteUser();
    });
}

function adminUpdateUser(id, detail) {
    return webService.adminUpdateUser(id, detail).then(result => {
        if (result == 1)
            return webMapper.adminUpdateUser();
        else if (result == 2)
            return webMapper.notExist();
        else
            return webMapper.adNotUpdateUser();
    }).catch(err => {
        return webMapper.adNotUpdateUser();
    });
}

function adStatusUpdUser(id, status) {
    return webService.adStatusUpdUser(id, status).then(result => {
        console.log(result)
        if (result == 1)
            return webMapper.adUpdateUserStatus();
        else if (result == 2)
            return webMapper.notExist();
        else
            return webMapper.adNUpdateUserStatus();
    }).catch(err => {
        return webMapper.adNUpdateUserStatus();
    })
}

module.exports = {
    addWebAdmin, login, deleteAdmin, editAdmin, viewCourseList, viewUserList, adminDeleteUser, adminUpdateUser,
    adStatusUpdUser,
}