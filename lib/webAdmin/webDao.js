const promise = require("bluebird");
const _ = require("lodash");


let WebAdmin = require("./webModel");
const Course = require("../course/courseModel");
const User = require("../user/userModel");

let Dao = new require("../dao/baseDao");
let webAdminDao = new Dao(WebAdmin);
let courseDao = new Dao(Course);
let userDao = new Dao(User);


function emailExist(detail) {
    let query = {
        $or: [
            { email: detail.email }
        ]
    }
    return webAdminDao.findOne(query);
}

function idExist(id) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return webAdminDao.findOne(query);
}
function userIdExist(id) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return userDao.findOne(query);
}

function tokenExist(token) {
    let query = {
        $or: [
            { token: token }
        ]
    }
    return webAdminDao.findOne(query);
}

function addAdmin(detail) {
    let query = new WebAdmin(detail);
    return webAdminDao.save(query);
}

function deleteAdmin(data) {
    return webAdminDao.remove(data);
}
function adminDeleteUser(data) {
    return userDao.remove(data);
}

function editWebAdmin(id, detail) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return webAdminDao.findOneAndUpdate(query, detail);
}

function adminUpdateUser(id, detail) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return userDao.findOneAndUpdate(query, detail);
}

function viewCourseList() {
    let query = {
        $and: [
            { status: "ACTIVATE" },
            { isDelete: false }
        ]
    }
    return courseDao.find(query);
}

function viewUserList() {
    return userDao.find();
}

function coursePagination(query, option) {
    return courseDao.findWithPeginate(query, option);
}

function userPagination(query, option) {
    return courseDao.findWithPeginate(query, option);
}


module.exports = {
    emailExist, addAdmin, idExist, deleteAdmin, editWebAdmin, tokenExist, viewCourseList, viewUserList, adminDeleteUser, userIdExist,
    adminUpdateUser, coursePagination, userPagination
}