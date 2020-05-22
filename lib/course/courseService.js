const promise = require("bluebird");
const _ = require("lodash");

const courseDao = require("./courseDao");
const courseMapper = require("./courseMapper");
const courseConstant = require("./courseConstant");

function addcourse(courseDetail, token) {
    return courseDao.saveCourse(courseDetail).then((result) => {
        return courseDao.checkIfExist(token).then((data) => {
            result.createdAt = data._id;
            result.save();
            return 1;
        }).catch(err => {
            return err;
        });
    }).catch(err => {
        return err;
    })
}

function deleteCourse(courseId, token) {
    return courseDao.getCourse(courseId).then((data1) => {
        return courseDao.checkIfExist(token).then((data) => {
            if (data._id == data1.createdAt) {
                return courseDao.deleteCourse(courseId).then(() => {
                    return 1;
                })
            } else
                return 2;
        })
    }).catch((err) => {
        return 2;
    });
}

function getCourse(getId) {
    return courseDao.getCourse(getId).then((data) => {
        if (data)
            return { data: data };
        else
            return 1;
    }).catch((err) => {
        return err;
    });
}

function updateCourse(getId, courseData, token) {
    return courseDao.getCourse(getId).then((data1) => {
        return courseDao.checkIfExist(token).then((data) => {
            if (data._id == data1.createdAt) {
                return courseDao.updateCourse(getId, courseData).then(() => {
                    return { courseData: courseData };
                });
            }
            return 1;
        })
    }).catch((err) => {
        return err;
    });
}

function changeStatus(courseId, statusData, token) {
    return courseDao.getCourse(courseId).then((data1) => {
        return courseDao.checkIfExist(token).then((data) => {
            if (data._id == data1.createdAt) {
                return courseDao.updateCourse(courseId, statusData).then(() => {
                    return { statusData: statusData };
                }).catch((err) => {
                    return courseMapper.notUpdateStatus();
                });
            }
            return { Message: courseConstant.MESSAGES.NOT_UPDATE_STATUS };
        });
    });
}

function courseDetail(token) {
    return courseDao.courseDetail().then((data) => {
        return courseDao.checkIfExist(token).then((data1) => {
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                if (data1.accountType === "TEACHER") {
                    if (data[i].status === "ACTIVATE" && data[i].isDelete === false && data1._id != data[i].createdAt) {
                        arr.push(data[i]);
                    }
                } else if (data1.accountType === "STUDENT") {
                    if (data[i].status === "ACTIVATE" && data[i].isDelete === false) {
                        arr.push(data[i]);
                    }
                }
            }
            if (arr.length != 0)
                return { arr: arr };
            else
                return 1;
        });
    }).catch((err) => {
        return 1;
    });
}

function getTeacherCourse(token) {
    return courseDao.checkIfExist(token).then((data1) => {
        let query = {
            $or: [
                { createdAt: data1._id }
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
        return courseDao.getCourseById(query, option).then((result) => {
            return { result: result };
        }).catch((err) => {
            return 1;
        })
    });
}

module.exports = {
    addcourse, deleteCourse, getCourse, updateCourse, courseDetail, changeStatus, getTeacherCourse
}