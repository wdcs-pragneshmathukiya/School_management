const promise = require("bluebird");
const _ = require("lodash");

const userDao = require("./userDao");
const userMapper = require("./userMapper");
const appUtil = require("../AppUtil");
const nodemailer = require("nodemailer");
const userConstant = require("./userConstant");
const jwtHandler = require("../jwtHandler");
const upload = require("../multer");

function signupUser(userDetail) {
    return userDao.checkIfExist(userDetail).then((exist) => {
        if (exist)
            return 1;
        else {
            return userDao.registerUser(userDetail).then((data) => {
                data.referalCode = appUtil.getRefferCode();
                data.save();
                return 2;
            });
        }
    });
}

function login(loginInfo) {
    return userDao.checkIfExist(loginInfo)
        .then((isExist) => {
            if (isExist) {
                return appUtil.verifyPassword(loginInfo, isExist).then((valid) => {
                    if (valid) {
                        return jwtHandler.genUserToken({ userId: isExist._id, name: isExist.name, email: isExist.email }).then((jwt) => {
                            isExist.token = jwt;
                            isExist.save();
                            return jwt;
                        }).catch((err) => {
                            return err;
                        });
                    } else
                        return 1;
                });
            } else
                return 2;
        });
}

function forgatePass(email) {
    return userDao.checkExist(email).then((exist) => {
        if (exist) {
            let randomPass = appUtil.getRandomPass();
            return appUtil.convertResetPass(randomPass.toString()).then((new_password) => {
                return userDao.resetPass(email, new_password).then((update_password) => {
                    return send_email(email, randomPass);
                });
            });
        } else
            return 3;
    }).catch(err => {
        return err;
    });
}

async function send_email(email, new_password) {

    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pragnesh.mathukiya@webcluesinfotech.com',
            pass: 'Mathukiya@0515'
        }
    });

    let mailOption = {
        from: "pragnesh.mathukiya@webcluesinfotech.com",
        to: email,
        subject: "New password request.",
        text: 'Please find your new password.',
        html: `<b>${new_password}</b>`
    };

    await transpoter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(userMapper.internalServerErr());
            return 1;
        } else {
            console.log(userMapper.emailSend());
            return 2;
        }
    });
}

async function singleFile() {
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pragnesh.mathukiya@webcluesinfotech.com',
            pass: 'Mathukiya@0515'
        }
    });

    let mailOption = {
        from: "pragnesh.mathukiya@webcluesinfotech.com",
        to: "pragnesh0515@gmail.com",
        subject: "Image send.",
        attachments:
        {
            filename: '001.jpg',
            path: 'C:/Users/Pragnesh/Desktop/Pragnesh/nodejs/school_manag/image/001.jpg'
        }
    };

    await transpoter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(userMapper.internalServerErr());
            return 1;
        } else {
            console.log(userMapper.emailSend());
            return 2;
        }
    });
}

async function multiFile() {
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pragnesh.mathukiya@webcluesinfotech.com',
            pass: 'Mathukiya@0515'
        }
    });

    let mailOption = {
        from: "pragnesh.mathukiya@webcluesinfotech.com",
        to: "pragnesh0515@gmail.com",
        subject: "Image send.",
        attachments: [
            {
                filename: 'squared-512.png',
                path: 'https://cdn2.iconfinder.com/data/icons/math-numbers-1/24/squared-512.png'
            }, {
                filename: 'social_media_isometric_3-instagram-512.png',
                path: 'https://cdn2.iconfinder.com/data/icons/social-media-2199/64/social_media_isometric_3-instagram-512.png'
            }, {
                filename: '001.jpg',
                path: 'C:/Users/Pragnesh/Desktop/Pragnesh/nodejs/school_manag/image/001.jpg'
            }
        ]
    };

    await transpoter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(userMapper.internalServerErr());
            return userMapper.internalServerErr();
        } else {
            console.log(userMapper.emailSend());
            return userMapper.emailSend();
        }
    });
}

function purchaseCourse(id, token) {
    return userDao.getDataBuyId(id).then((data) => {
        return userDao.getTokenData(token).then((data1) => {
            if (data1.accountType === "TEACHER") {
                if (data1._id != data.createdAt) {
                    return userDao.saveData().then((result) => {
                        return addData(data1, data, result)
                    });
                } else
                    return 2;
            } else if (data1.accountType === "STUDENT") {
                return userDao.saveData().then((result) => {
                    return addData(data1, data, result)
                });
            } else {
                return 2;
            }
        })
    }).catch((err) => {
        return err;
    })
}

function buyCourseList(token) {
    return userDao.getTokenData(token).then((data1) => {
        if (data1) {
            let id = data1._id;
            return userDao.buyList(id).then((result) => {
                return { buyList: result };
            }).catch((err) => {
                return 1;
            })
        } else return 1;
    }).catch((err) => {
        return 1;
    });
}

function addFav(id, token) {
    return userDao.getDataBuyId(id).then((data) => {
        return userDao.getTokenData(token).then((data1) => {
            let fid = data._id;
            let fid1 = data1._id;
            return userDao.findExeData(fid).then((fResult) => {
                return userDao.findExeOtherData(fid1).then((fResult1) => {
                    if ((fResult.length == 0 && fResult1.length == 0) || (fResult.length == 0 && fResult1.length == 1) || (fResult.length == 1 && fResult1.length == 0)) {
                        return userDao.favSaveData().then((result) => {
                            console.log(result)
                            addData(data1, data, result);
                            return 1;
                        })
                    } else
                        return 2;
                })
            })
        }).catch((err) => {
            return 3;
        });
    }).catch((err) => {
        return 3;
    });
}

// function favList(token) {
//     return userDao.getTokenData(token).then((data) => {
//         return userDao.findFavList(data).then((result) => {
//             if (result.length != 0)
//                 return { findFavList: result };
//             else
//                 return 1;
//         }).then((err) => {
//             return err;
//         })
//     })
// }

function favList(token) {
    return userDao.getTokenData(token).then((data) => {

        let query = {
            $or: [
                { favId: data._id }
            ]
        }
        let option = {
            sort: {
                'createdAt': -1
            }
        }

        option['offset'] = 0;
        option['limit'] = 3;
        option['collection'] = { locale: "en_US", numericOrdering: true }
        console.log(query)
        return userDao.findFavList(query, option).then((result) => {
            console.log(result)
            if (result.length != 0)
                return { findFavList: result };
            else
                return 1;
        }).then((err) => {
            return err;
        })
    })
}

function removeFav(id, token) {
    return userDao.getTokenData(token).then((data) => {
        return userDao.findFavList(data).then((result) => {
            let favId = data._id;
            return userDao.findRemoveData(id, favId).then((removeData) => {
                return userDao.removeData(removeData).then(() => {
                    return 1;
                })
            }).catch((err) => {
                return 2;
            });
        });
    });
}

function uploadFile(req) {
    return upload(req, function (err) {
        if (err) {
            return ({ error_code: 1, err_desc: err });
        }
        return ({ error_code: 0, err_desc: null });
    });
}

module.exports = {
    signupUser, login, forgatePass, singleFile, multiFile, purchaseCourse, buyCourseList, addFav, favList, removeFav, uploadFile
}

function addData(data1, data, result) {
    result.courseId = data._id;
    result.name = data.name;
    result.price = data.price;
    result.status = data.status;
    result.isDelete = data.isDelete;
    result.createdAt = data.createdAt;
    result.favId = data1._id;
    result.PurchaseId = data1._id;
    result.save();
    return 1;
}