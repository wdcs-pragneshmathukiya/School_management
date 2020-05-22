const CODE = {
    ok: 200,
    badrequest: 400,
}

const MESSAGES = {
    checkAccType: "Student cannot write course.",
    validationError: "Validation error.",
    courseAdd: "Course added successfully.",
    notCourseAdd: "Course not add please try later.",
    deleteCourse: "Course deleted.",
    notDeleteCourse: "Not deleted this course.",
    courseUpdate: "Course update successfully.",
    notUpdate: "Course not update please try again.",
    updateStatus: "Status update successfully.",
    statusNotUpdate: "Status not update try again.",
    courseNotFound: "Course data not found.",
    tokenNotExist: "Token can not find."
}

module.exports = {
    MESSAGES, CODE
}