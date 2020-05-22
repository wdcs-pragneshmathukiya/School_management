var mongoose = require("mongoose");
var promise = require("bluebird");
var _ = require("lodash");

const Dao = new require("../dao/baseDao");
const User = require("../user/userModel");
const Admin = require("./subModel");
const userDao = new Dao(User);
const subDao = new Dao(Admin);

function checkIfExist(email) {
    let query = {
        $or: [
            { email: email }
        ]
    }
    return subDao.findOne(query);
}

function tokenExist(token) {
    let query = {
        $or: [
            { token: token }
        ]
    }
    return subDao.findOne(query);
}

function findById(id) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return subDao.findOne(query);
}

function findAndUpdate(id, status) {
    let query = {
        $or: [
            { _id: id }
        ]
    }
    return subDao.findOneAndUpdate(query, status);
}

function addSubAdmin(detail) {
    let query = new User(detail);
    return subDao.save(query);
}

function deleteAdmin(id) {
    return subDao.findByIdAndRemove(id);
}

function findAll(query, option) {
    return subDao.findWithPeginate(query, option);
}

module.exports = {
    checkIfExist, addSubAdmin, tokenExist, deleteAdmin, findAndUpdate, findById, findAll
}