const courseRouter = require("express").Router();
const courseFacade = require("./courseFacade");
const courseValidation = require("./courseValidation");
const jwtHandler = require("../jwtHandler");

courseRouter.route('/addCourse').post([jwtHandler.verifyToken, courseValidation.checkAccType], (req, res) => {
    let courseObj = req.body;
    let token = req.headers.authorization;
    courseFacade.addCourse(courseObj, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/deleteCourse/:id').post([jwtHandler.verifyToken, courseValidation.checkAccType], (req, res) => {
    let courseId = req.params.id;
    let token = req.headers.authorization;
    courseFacade.deleteCourse(courseId, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/getUpateCourse/:id').get([jwtHandler.verifyToken, courseValidation.checkAccType], (req, res) => {
    let courseId = req.params.id;
    courseFacade.getUpdateData(courseId).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/updateCourse/:id').post([jwtHandler.verifyToken, courseValidation.checkAccType], (req, res) => {
    let courseId = req.params.id;
    let courseData = req.body;
    let token = req.headers.authorization;
    courseFacade.updateData(courseId, courseData, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/changeStatus/:id').post([jwtHandler.verifyToken, courseValidation.checkAccType], (req, res) => {
    let courseId = req.params.id;
    let statusData = req.body;
    let token = req.headers.authorization;
    courseFacade.changeStatus(courseId, statusData, token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/courseDetail').get([jwtHandler.verifyToken], (req, res) => {
    let token = req.headers.authorization;
    courseFacade.courseDetail(token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

courseRouter.route('/getTeacherCourse').get([jwtHandler.verifyToken], (req, res) => {
    let token = req.headers.authorization;
    courseFacade.getTeacherCourse(token).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.json(err);
    });
});

module.exports = courseRouter;