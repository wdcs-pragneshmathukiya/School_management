const promise = require("bluebird");
const _ = require("lodash");

const userService = require("./userService");
const userMapper = require("./userMapper");

function signup(signupInfo) {
    return userService.signupUser(signupInfo)
        .then((result) => {
            if (result == 1)
                return userMapper.userExist();
            else if (result == 2)
                return userMapper.registerSuccess();
            else userMapper.registerErr(err);
        }).catch(err => {
            return userMapper.registerErr(err);
        })
}

function login(detail) {
    return userService.login(detail).then(result => {
        if (result == 1)
            return userMapper.passwordNotMatch();
        else if (result == 2)
            return userMapper.userNotExist();
        else if (result)
            return userMapper.loginSuccess(result);
        else if (err)
            return userMapper.loginErr();
    }).catch(err => {
        return userMapper.loginErr();
    });
}

function forgatePass(email) {
    return userService.forgatePass(email).then((result) => {
        if (result == 1)
            return userMapper.serverError();
        else if (result == 2)
            return userMapper.sendEmail();
        else if (result == 3)
            return userMapper.userNotExist();
        else
            return userMapper.notSendEmail();
    }).catch(err => {
        return userMapper.notSendEmail();
    });
}

function singleFile() {
    return userService.singleFile().then((result) => {
        if (result == 1)
            return userMapper.serverError();
        else if (result == 2)
            return userMapper.sendEmail();
        else
            return userMapper.notSendEmail();
    }).catch(err => {
        return userMapper.notSendEmail()
    });
}

function multiFile() {
    return userService.multiFile().then((result) => {
        if (result == 1)
            return userMapper.serverError();
        else if (result == 2)
            return userMapper.sendEmail();
        else return userMapper.notSendEmail();
    }).catch(err => {
        return userMapper.notSendEmail();
    });
}

function purchaseCourse(id, token) {
    return userService.purchaseCourse(id, token).then((result) => {
        if (result == 1)
            return userMapper.purchase();
        else if (result == 2)
            return userMapper.notPurchase();
        else return userMapper.notPurchase();
    }).catch(err => {
        return userMapper.notPurchase();
    });
}

function buyCourseList(token) {
    return userService.buyCourseList(token).then((result) => {
        if (result.buyList != null)
            return result.buyList;
        else if (result == 1)
            return userMapper.dataNotFound();
        else
            return userMapper.dataNotGet();
    }).catch(err => {
        return userMapper.dataNotGet();
    });
}

function addFav(id, token) {
    return userService.addFav(id, token).then((result) => {
        if (result == 1)
            return userMapper.addDataFav();
        else if (result == 2)
            return userMapper.alreadyAddFav();
        else if (result == 3)
            return userMapper.notAddFav();
        else
            return userMapper.notAddFav();
    }).catch(err => {
        return userMapper.notAddFav();
    });
}

function favList(token) {
    return userService.favList(token).then((result) => {
        if (result.findFavList != null)
            return result.findFavList;
        else if (result == 1)
            return userMapper.dataNotFound();
        else
            return userMapper.errFavList();
    }).catch(err => {
        return userMapper.errFavList();
    });
}

function removeFav(id, token) {
    return userService.removeFav(id, token).then((result) => {
        if (result == 1)
            return userMapper.removeFavCourse();
        else if (reuslt == 2)
            return userMapper.errRemoveFavCourse();
        else
            return userMapper.errRemoveFavCourse();
    });
}

function uploadFile(req) {
    return userService.uploadFile(req).then(result => {
        console.log(result)
        // return result
        if (result == 1)
            return userMapper.importFile();
        else if (result == 2)
            return userMapper.nofile();
        else
            return userMapper.coruptFile();
    }).catch(err => {
        return err;
    })
}

module.exports = {
    signup, login, forgatePass, singleFile, multiFile, purchaseCourse, buyCourseList, addFav, favList, removeFav, uploadFile
}