const promise = require("bluebird");
const _ = require("lodash");
const jwtHandler = require("../jwtHandler");

const subDao = require("./subDao");
const subConstant = require("./subConstant");
const appUtil = require("../AppUtil");
const subMapper = require("./subMapper");

function login(detail) {
    return subDao.checkIfExist(detail.email).then(exist => {
        if (exist) {
            return appUtil.verifyPassword(detail, exist).then(valid => {
                if (valid) {
                    return jwtHandler.genUserToken({ userId: exist._id, name: exist.name, email: exist.email })
                        .then(jwt => {
                            exist.token = jwt;
                            exist.save();
                            return { token: token };
                        })
                } else
                    return 1;
            }).catch(err => {
                return 1;
            })
        } else {
            return 2;
        }
    }).catch(err => {
        return 2;
    });
}

function addSubAdmin(detail, token) {
    return subDao.tokenExist(token).then(exist => {
        if (exist) {
            return subDao.checkIfExist(detail.email).then(isExist => {
                if (!isExist) {
                    if (detail.accountType != "SUPERADMIN") {
                        return subDao.addSubAdmin(detail).then(() => {
                            return 1;
                        })
                    } else
                        return 2;
                } else
                    return 3;
            })
        } else
            return 4;
    });
}

function deleteAdmin(id) {
    return subDao.deleteAdmin(id).then(() => {
        return 1;
    });
}

function changeStatus(id, status) {
    return subDao.findById(id).then(getData => {
        if (getData) {
            return subDao.findAndUpdate(id, status).then(() => {
                return 1;
            })
        } else
            return 2;
    });
}

function superAdminEdit(id, data) {
    return subDao.findById(id).then(getData => {
        if (getData) {
            return subDao.findAndUpdate(id, data).then(() => {
                return 1;
            })
        } else
            return 2;
    }).catch(err => {
        return err;
    });
}

function subAdminEdit(id, token, data) {
    return subDao.tokenExist(token).then(exist => {
        return subDao.findById(id).then(getId => {
            if (exist._id == id) {
                return subDao.findAndUpdate(id, data).then(() => {
                    return 1;
                })
            } else
                return 2;
        }).catch(err => {
            return err;
        })
    }).catch(err => {
        return err;
    });
}

function viewList() {
    let query;
    let option = {
        sort: {
            'createdAt': -1
        }
    }

    option['offset'] = 0;
    option['limit'] = 2;
    option['collection'] = { locale: "en_US", numericOrdering: true }
    return subDao.findAll(query, option).then(data => {
        if (data)
            return { data: data };
        return 2;
    }).catch(err => {
        return err;
    });
}

module.exports = {
    addSubAdmin, login, deleteAdmin, changeStatus, superAdminEdit, viewList, subAdminEdit
}