const usrRouter = require("express").Router();

const usrFacade = require("./userFacade");
const appUtil = require("../AppUtil");
const userValidator = require("./userValidator");
const jwtHandler = require("../jwtHandler");
const resHandl = require("../responseHandler");
const uploadFile = require("../multer");

usrRouter.route('/register').post([userValidator.requiredCheck, appUtil.convertPass], (req, res) => {
    let userObj = req.body;
    usrFacade.signup(userObj).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

usrRouter.route('/login').post([userValidator.validateLogin], (req, res) => {
    let userObj = { email, password } = req.body;
    usrFacade.login(userObj).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

usrRouter.route('/forgatePass').post((req, res) => {
    let email = req.body.email;
    usrFacade.forgatePass(email).then((result) => {
        if (result.error) {
            return resHandl.sendError(res, result.error);
        } else {
            return resHandl.sendSuccess(res, result);
        }
    }).catch((err) => {
        return res.json(err)
    });
});

usrRouter.route('/singleFile').post((req, res) => {
    usrFacade.singleFile().then((result) => {
        if (result.error) {
            return resHandl.sendError(res, result.error);
        } else {
            return resHandl.sendSuccess(res, result);
        }
    }).catch((err) => {
        return res.json(err)
    });
});

usrRouter.route('/multiFile').post((req, res) => {
    usrFacade.multiFile().then((result) => {
        if (result.error) {
            return resHandl.sendError(res, result.error);
        } else {
            return resHandl.sendSuccess(res, result);
        }
    }).catch((err) => {
        return res.json(err)
    });
});

usrRouter.route('/buyCourse/:id').post([jwtHandler.verifyToken], (req, res) => {
    let id = req.params.id;
    let token = req.headers.authorization;
    usrFacade.purchaseCourse(id, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

usrRouter.route('/buyCourseList').get([jwtHandler.verifyToken], (req, res) => {
    let token = req.headers.authorization;
    usrFacade.buyCourseList(token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

usrRouter.route('/addFav/:id').post([jwtHandler.verifyToken], (req, res) => {
    let id = req.params.id;
    let token = req.headers.authorization;
    usrFacade.addFav(id, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

usrRouter.route('/favList').get([jwtHandler.verifyToken], (req, res) => {
    let token = req.headers.authorization;
    usrFacade.favList(token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    })
});

usrRouter.route('/removeFav/:id').post([jwtHandler.verifyToken], (req, res) => {
    let token = req.headers.authorization;
    let id = req.params.id;
    usrFacade.removeFav(id, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    })
});

usrRouter.route('/upload').post((req, res) => {
    usrFacade.uploadFile(req).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    })
})

module.exports = usrRouter;