const webRouter = require("express").Router();

const webFacad = require("./webFacad");
const appUtil = require("../AppUtil");
const jwtHandler = require("../jwtHandler");
const webValidation = require("./webValidation");

webRouter.route("/addWebAdmin").post([appUtil.convertPass], (req, res) => {
    let detail = req.body;
    webFacad.addWebAdmin(detail).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/WebAdminLogin").post((req, res) => {
    let detail = req.body;
    webFacad.login(detail).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/deleteWebAdmin/:id").post([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    let id = req.params.id;
    let token = req.headers.authorization;
    webFacad.deleteAdmin(id, token).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/editWebAdmin/:id").post([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    let id = req.params.id;
    let detail = req.body;
    let token = req.headers.authorization;
    webFacad.editAdmin(id, detail, token).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/viewCourseList").get([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    webFacad.viewCourseList(req).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/viewUserList").get([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    webFacad.viewUserList().then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/adminDeleteUser/:id").post([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    let id = req.params.id;
    webFacad.adminDeleteUser(id).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/adminUpdateUser/:id").post([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    let id = req.params.id;
    let detail = req.body;
    webFacad.adminUpdateUser(id, detail).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

webRouter.route("/adStatusUpdUser/:id").post([jwtHandler.verifyToken, webValidation.validation], (req, res) => {
    let id = req.params.id;
    let status = req.body;
    webFacad.adStatusUpdUser(id, status).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

module.exports = webRouter;