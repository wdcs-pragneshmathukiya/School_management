const courseConstant = require("./courseConstant");

function addCourse() {
    return {
        Status: courseConstant.CODE.ok,
        Message: courseConstant.MESSAGES.courseAdd
    }
}
function notAdd() {
    return {
        Status: courseConstant.CODE.badrequest,
        Message: courseConstant.MESSAGES.notCourseAdd
    }
}
function deleteCourse() {
    return {
        Status: courseConstant.CODE.ok,
        Message: courseConstant.MESSAGES.deleteCourse
    }
}
function notDeleteCourse() {
    return {
        Status: courseConstant.CODE.badrequest,
        Message: courseConstant.MESSAGES.notDeleteCourse
    }
}
function courseUpdate(detail) {
    return {
        Status: courseConstant.CODE.ok,
        Message: courseConstant.MESSAGES.courseUpdate,
        Data: detail
    }
}
function courseNotUpdate() {
    return {
        Status: courseConstant.CODE.badrequest,
        Message: courseConstant.MESSAGES.notUpdate
    }
}
function statusUpdate(detail) {
    return {
        Status: courseConstant.CODE.ok,
        Message: courseConstant.MESSAGES.updateStatus,
        Data: detail
    }
}
function StatusNotUpdate() {
    return {
        Status: courseConstant.CODE.badrequest,
        Message: courseConstant.MESSAGES.statusNotUpdate
    }
}
function courseNotFound() {
    return {
        Status: courseConstant.CODE.badrequest,
        Message: courseConstant.MESSAGES.courseNotFound
    }
}


module.exports = {
    addCourse, notAdd, deleteCourse, notDeleteCourse, courseUpdate, courseNotUpdate,
    statusUpdate, StatusNotUpdate, courseNotFound
}