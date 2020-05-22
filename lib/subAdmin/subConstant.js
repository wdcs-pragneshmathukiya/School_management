const CODE = {
    requiredField: 500,
    ok: 200,
    badrequest: 400,
    Unauthorized: 401
}

const MESSAGE = {
    tokenNotExist: "Failed to authenticate token.",
    subNotAdd: " not worked.",
    login: "Log in successfully",
    notValidPass: "Please enter valid password.",
    notExist: "Data not exist.",
    exist: "data exist.",
    loginErr: "Login err, Try again.",
    addSubAdmin: "SubAdmin add successfully.",
    notAddSubAdmin: "SubAdmin not added.",
    deleteSubAdmin: "SubAdmin deleted.",
    notDeleteSub: "Not deleted sub admin.",
    updateStatus: "Status update successfully.",
    notUpdateStatus: "Status not update.",
    supAdminEdit: "SuperAdmin edit successfully.",
    notEdit: "Data can not edit.",
    subAdminEdit: "SubAdmin edit successfully.",
}

module.exports = {
    MESSAGE, CODE
}