const CODE = {
    requiredField: 500,
    ok: 200,
    badrequest: 400,
    Unauthorized: 401
}

const MESSAGE = {
    defferentEmailAdd: "Please fill defferent detail.",
    addSuccessfully: "Web admin add successfully.",
    notAdd: "Web admin not add.",
    notExist: "Data not exist.",
    passwordNotMatch: "Password not match.",
    login: "Login successfullly.",
    notLogin: "WebAdmin not login.",
    delete: "Delete successfully.",
    notDelete: "WebAdmin not delete.",
    update: "Update successfully.",
    notUpdate: "WebAdmin not update.",
    tokenNotExist: "Authenticate token not match.",
    validationErr: "validation error.",
    notViewCourseList: "Can not show course list try later.",
    notViewCourseList: "Can not show user list try later.",
    adminDeleteUser: "User delete successfully.",
    adNotDeleteUser: "User not delete try again.",
    adminUpdateUser: "User update successfully.",
    adNotUpdateUser: "User not update try again.",
    adUpdateUserStatus: "User status update successfully.",
    adNUpdateUserStatus: "User status not update try again."
}

module.exports = {
    MESSAGE, CODE
}