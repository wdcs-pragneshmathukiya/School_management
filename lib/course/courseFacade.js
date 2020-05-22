const promise = require("bluebird");
const _ = require("lodash");

const courseService = require("./courseService");
const courseMapping = require("./courseMapper");

function addCourse(courseInfo, token) {
    return courseService.addcourse(courseInfo, token)
        .then((result) => {
            if (result == 1)
                return courseMapping.addCourse();
            else if (err)
                return courseMapping.notAdd();
        }).catch(err => {
            return courseMapping.notAdd();
        })
}

function deleteCourse(deleteId, token) {
    return courseService.deleteCourse(deleteId, token).then((result) => {
        console.log(result)
        if (result == 1)
            return courseMapping.deleteCourse();
        else
            return courseMapping.notDeleteCourse();
    })
}

function getUpdateData(getId, token) {
    return courseService.getCourse(getId, token)
        .then((result) => {
            if (result.data != null)
                return result.data;
            else
                return courseMapping.courseNotFound();
        }).catch(err => {
            return courseMapping.courseNotFound();
        })
}

function updateData(getId, courseData, token) {
    return courseService.updateCourse(getId, courseData, token)
        .then((result) => {
            if (result.courseData)
                return courseMapping.courseUpdate(result.courseData);
            else
                return courseMapping.courseNotUpdate();
        }).catch(err => {
            return courseMapping.courseNotUpdate();
        })
}

function changeStatus(courseId, statusData, token) {
    return courseService.changeStatus(courseId, statusData, token).then((result) => {
        if (result.statusData)
            return courseMapping.statusUpdate(result.statusData);
        else
            return courseMapping.StatusNotUpdate();
    }).catch(err => {
        return courseMapping.StatusNotUpdate();
    });
}

function courseDetail(token) {
    return courseService.courseDetail(token).then((result) => {
        if (result.arr)
            return result.arr;
        else
            return courseMapping.courseNotFound();
    }).catch(err => {
        return courseMapping.courseNotFound();
    })
}

function getTeacherCourse(token) {
    return courseService.getTeacherCourse(token).then((result) => {
        if (result.result)
            return result.result;
        else
            return courseMapping.courseNotFound();
    }).catch(err => {
        return courseMapping.courseNotFound();
    })
}

module.exports = {
    addCourse,
    deleteCourse,
    getUpdateData,
    updateData,
    courseDetail,
    changeStatus,
    getTeacherCourse
}