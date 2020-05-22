const CODE = {
    requiredField: 500,
    ok: 200,
    badrequest: 400,
    Unauthorized: 401
}

const MESSAGES = {
    nameEmpty: "Please required name.",
    emailEmpty: "Please required email.",
    passEmpty: "Please required password.",
    userExist: "User already exist.",
    registerSuccess: "Successfully registered.",
    registerErr: "Registration error.",
    loginSuccess: "Login successfully.",
    userNotExist: "User not exist.",
    passwordNotMatch: "Password not match.",
    loginErr: "Login failed please try later.",
    serverError: "Internal server error.",
    emailSend: "Email send successfully.",
    emailNotSend: "Email not send please try later.",
    dataNotFound: "Data not found.",
    dataNotGet: "Data not get try again.",
    purchase: "Course purchase successfully.",
    notPurchase: "Can't purchase course please try later.",
    addDataFav: "Successfully data add to favorite list.",
    alreadyAddFav: "Course aleready add to favorite list.",
    notAddFav: "Course not add favorite list please try later.",
    errFavList: "Favorite list not found please try later.",
    removeFavCourse: "Successfully remove course at favorite list.",
    errRemoveFavCourse: "Can't remove course please try later.",
    validationError: "Validation error.",
    noFile: "No file passed.",
    coruptFile: "Corupted excel file.",
    imporeFile: "File export successfully.",
}

module.exports = {
    MESSAGES, CODE
}