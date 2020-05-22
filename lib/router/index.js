const userRouter = require("../user/userRouter");
const courseRouter = require("../course/courseRouter");
const subRouter = require("../subAdmin/subRoute");
const webAdmin = require("../webAdmin/webRouter");

module.exports = function (app) {
    app.use(userRouter, courseRouter, subRouter, webAdmin);
}