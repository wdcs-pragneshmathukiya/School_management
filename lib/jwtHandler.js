var Promise = require("bluebird");
var jwt = Promise.promisifyAll(require("jsonwebtoken"));
var exception = require("./coustemException");
var appConstant = require("./constant");

let User = require("./user/userModel");
let BaseDao = new require("./dao/baseDao");
const userDao = new BaseDao(User);

var TOKEN_EXPIRATION_SEC = appConstant.TOKEN_EXPIRATION_TIME * 60;

var JWT_SECRET_KEY = "login_secret_key_to_save_data";

function genUserToken(user) {
    return jwt.signAsync(user, JWT_SECRET_KEY)
        .then(function (jwtToken) {
            return jwtToken;
        })
        .catch(function (err) {
            throw new exception.tokenGenException();
        })
}

function verifyToken(req, res, next) {
    let token = req.headers.authorization;
    jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.send({
                "status": 500,
                "message": "Failed to authenticate token."
            });
        }
        next();
    });
}
var expireToken = function (req) {
    var token = req.get('accessToken');
    console.log(token);
    if (token) {
        redisClient.setValue(token, true);
        redisClient.expire(token, TOKEN_EXPIRATION_SEC);
    }
};

module.exports = {
    genUserToken,
    verifyToken,
    expireToken
}