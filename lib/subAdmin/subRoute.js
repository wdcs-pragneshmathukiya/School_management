const subRouter = require("express").Router();

const subFacad = require("./subFacad");
const appUtil = require("../AppUtil");
const jwtHandler = require("../jwtHandler");
const subValidation = require("./subValidation");

subRouter.route("/adminLogin").post((req, res) => {
    let detail = req.body;
    subFacad.login(detail).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

subRouter.route("/addSubAdmin").post([jwtHandler.verifyToken, appUtil.convertPass, subValidation.statusVarify], (req, res) => {
    let token = req.headers.authorization;
    let detail = req.body;
    subFacad.addSubAdmin(detail, token).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

subRouter.route("/deleteAdmin/:id").post([jwtHandler.verifyToken, subValidation.statusVarify], (req, res) => {
    let id = req.params.id;
    subFacad.deleteAdmin(id).then(result => {
        return res.json(result);
    }).then(err => {
        return res.json(err);
    });
});

subRouter.route("/changeSubStatus/:id").post([jwtHandler.verifyToken, subValidation.statusVarify], (req, res) => {
    let id = req.params.id;
    let status = req.body;
    subFacad.changeStatus(id, status).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

subRouter.route("/superAdminEdit/:id").post([jwtHandler.verifyToken, appUtil.convertPass, subValidation.statusVarify], (req, res) => {
    let id = req.params.id;
    let data = req.body;
    subFacad.superAdminEdit(id, data).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

subRouter.route("/subAdminEdit/:id").post([jwtHandler.verifyToken, appUtil.convertPass,], (req, res) => {
    let id = req.params.id;
    let token = req.headers.authorization;
    let data = req.body;
    subFacad.subAdminEdit(id, token, data).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

subRouter.route("/viewList").get((req, res) => {
    subFacad.viewList().then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

module.exports = subRouter;