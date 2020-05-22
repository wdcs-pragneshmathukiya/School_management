var mongoose = require("mongoose");
var promise = require("bluebird");
var _ = require("lodash");

const Fav = require("./favModel");
const Buy = require("./buyModel");
const Course = require("../course/courseModel");
const User = require("./userModel");

let Dao = new require("../dao/baseDao");
let favDao = new Dao(Fav);
let buyDao = new Dao(Buy);
let courseDao = new Dao(Course);
let userDao = new Dao(User);

function checkIfExist(userDetail) {

    let query = {
        $or: [
            { email: userDetail.email }
        ]
    }
    return userDao.findOne(query);
}

function checkExist(email) {
    let query = {
        $or: [
            { email: email }
        ]
    }
    return userDao.findOne(query);
}

function getDataBuyId(id) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return courseDao.findOne(query);
}

function buyList(id) {
    return buyDao.find(query);
}

function getTokenData(token) {
    let query = {
        $or: [
            { token: token }
        ]
    }
    return userDao.findOne(query);
}

function findExeData(id) {
    let query = {
        $or: [
            { courseId: id },
        ]
    }
    return favDao.find(query);
}

function findExeOtherData(id) {
    let query = {
        $or: [
            { createdAt: id },
        ]
    }
    return favDao.find(query);
}

function findFavList(query, option) {
    return favDao.findWithPeginate(query, option);
}

function findRemoveData(id, favId) {
    let query = {
        $or: [
            { _id: id },
            { favId: favId }
        ]
    }
    return favDao.findOne(query);
}

function registerUser(userInfo) {
    let user = new User(userInfo);
    return userDao.save(user);
}

function saveData(buyData) {
    let buy = new Buy(buyData)
    return buyDao.save(buy);
}

function favSaveData(favData) {
    let data = new Fav(favData);
    return favDao.save(data);
}

function removeUser(userInfo) {
    return userDao.remove(userInfo);
}

function removeData(findDetail) {
    return favDao.remove(findDetail);
}

function resetPass(email, new_password) {
    let query = {}
    query.email = email;

    let update = {};
    update.password = new_password;

    return userDao.findOneAndUpdate(query, update);
}

module.exports = {
    checkIfExist, registerUser, removeUser, resetPass, checkExist, getDataBuyId, getTokenData, saveData, findExeData,
    findExeOtherData, favSaveData, findFavList, removeData, findRemoveData, buyList,
}