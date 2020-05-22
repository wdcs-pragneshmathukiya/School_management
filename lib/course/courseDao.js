var mongoose = require("mongoose");
var promise = require("bluebird");
var _ = require("lodash");

let Course = require("./courseModel");
let User = require("../user/userModel");

let BaseDao = new require("../dao/baseDao");
let courseDao = new BaseDao(Course);
let userDao = new BaseDao(User);

function checkIfExist(userToken) {
    let query = {
        $or: [
            { token: userToken }
        ]
    }
    return userDao.findOne(query);
}

function courseCheckIfExist(courseToken) {
    let query = {
        $or: [
            { token: courseToken }
        ]
    }
    return courseDao.findOne(query);
}

function saveCourse(courseInfo) {
    let course = new Course(courseInfo);
    return courseDao.save(course);
}

function deleteCourse(courseId) {
    return courseDao.findByIdAndRemove(courseId);
}

function getCourse(courseId) {
    let query = {
        $or: [
            { _id: courseId }
        ]
    }
    return courseDao.findOne(query);
}

function updateCourse(getId, courseData) {
    let query = {
        $or: [
            { _id: getId }
        ]
    }
    return courseDao.findOneAndUpdate(query, courseData);
}

function courseDetail(req) {
    return courseDao.find();
}

function getCourseById(query, option) {
    return courseDao.findWithPeginate(query, option);
}

module.exports = {
    saveCourse,
    checkIfExist,
    deleteCourse,
    getCourse,
    updateCourse,
    courseDetail,
    getCourseById,
    courseCheckIfExist
}