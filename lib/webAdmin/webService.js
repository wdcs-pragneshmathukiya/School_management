const promise = require("bluebird");
const _ = require("lodash");

const webDao = require("./webDao");
const jwtHandler = require("../jwtHandler");
const appUtil = require("../AppUtil");

function addWebAdmin(detail) {
    return webDao.emailExist(detail).then(emailExist => {
        if (emailExist) return 1;
        else {
            return webDao.addAdmin(detail).then(() => {
                return 2;
            });
        }
    }).catch(err => {
        return err;
    });
}

function login(detail) {
    return webDao.emailExist(detail).then(emailExist => {
        if (emailExist) {
            return appUtil.verifyPassword(detail, emailExist).then(valid => {
                if (valid) {
                    return jwtHandler.genUserToken({ userId: emailExist._id, name: emailExist.name, email: emailExist.email }).then(jwt => {
                        emailExist.token = jwt;
                        emailExist.save();
                        return { token: jwt };
                    })
                } else return 1;
            })
        } else return 2;
    }).catch(err => {
        return err;
    });
}

function deleteAdmin(id, token) {
    return webDao.tokenExist(token).then(tExist => {
        if (tExist) {
            return webDao.idExist(id).then(exist => {
                if (exist) {
                    return webDao.deleteAdmin(exist).then(() => {
                        return 1;
                    })
                } else return2;
            }).catch(err => {
                return err;
            });
        } else return 3;
    }).catch(err => {
        return err;
    })
}

function editAdmin(id, detail, token) {
    return webDao.tokenExist(token).then(tExist => {
        if (tExist) {
            return webDao.idExist(id).then(exist => {
                if (exist) {
                    return webDao.editWebAdmin(id, detail).then(() => {
                        return 1;
                    })
                } else return 2;
            }).catch(err => {
                return err;
            });
        } else return 3;
    }).catch(err => {
        return err;
    });
}

// function viewcourseList() {
//     return webDao.viewCourseList().then(list => {
//         if (list.length != 0)
//             return { list: list };
//         else
//             return 1;
//     }).catch(err => {
//         return err;
//     });
// }

function viewcourseList(req) {
    let query = {
        $and: [
            { status: "ACTIVATE" },
            { isDelete: false }
        ]
    }

    let option = {
        sort: {
            'createdAt': -1
        }
    }

    // var columnName = null;
    // var clumnValue = null;
    // var key = null;
    // var cname = null;

    // if (req.body['search'] && req.body['search']['value']) {
    //     query['$or'] = [];
    // }

    // for (let i = 0; i < 5; i++) {
    //     if (req.body['search'] && req.body['search']['value']) {
    //         if (req.body['columns'] && req.body['columns'][i]['data']) {
    //             columnName = req.body['columns'][i]['data'];
    //             clumnValue = req.body['search']['value'];
    //             key = columnName,
    //                 query['$or'].push({
    //                     [key]: {
    //                         $regex: clumnValue,
    //                         $option: 'i'
    //                     }
    //                 })
    //         }
    //     }
    //     if (req.body['search'] && req.body['order'][0]['column'] == i) {
    //         cname = req.body['columns'][i]['data'];
    //         option = {
    //             sort: {
    //                 [cname]: (req.body['order'][0]['dir'] == 'asc') ? 1 : -1
    //             }
    //         };
    //     }
    // }

    option['offset'] = 0;
    option['limit'] = 3;
    option['collaction'] = { locale: "en_US", numericOrdering: true }

    return webDao.pagination(query, option).then(result => {
        return { list: result };
    }).catch(err => {
        return err;
    })
}

// function viewUserList() {
//     return webDao.viewUserList().then(list => {
//         if (list.length != 0)
//             return { list: list };
//         else
//             return 1;
//     }).catch(err => {
//         return err;
//     });
// }

function viewUserList() {
    let query;
    let option = {
        sort: {
            'createdAt': -1
        }

    }
    option['offset'] = 0;
    option['limit'] = 2;
    option['collaction'] = { locale: "en_US", numericOrdering: true }

    return webDao.userPagination(query, option).then(result => {
        return { list: result }
    }).catch(err => {
        return err;
    })
}

function adminDeleteUser(id) {
    return webDao.userIdExist(id).then(exist => {
        if (exist) {
            return webDao.adminDeleteUser(exist).then(() => {
                return 1;
            });
        } else
            return 2;
    }).catch(err => {
        return err;
    });
}

function adminUpdateUser(id, detail) {
    return webDao.userIdExist(id).then(exist => {
        if (exist) {
            return webDao.adminUpdateUser(id, detail).then(() => {
                return 1;
            });
        } else return 2;
    });
}

function adStatusUpdUser(id, status) {
    return webDao.userIdExist(id).then(exist => {
        if (exist) {
            return webDao.adminUpdateUser(id, status).then(() => {
                return 1;
            })
        } else return 2;
    });
}

module.exports = {
    addWebAdmin, login, deleteAdmin, editAdmin, viewcourseList, viewUserList, adminDeleteUser, adminUpdateUser,
    adStatusUpdUser
}