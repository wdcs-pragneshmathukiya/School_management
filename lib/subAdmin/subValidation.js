const _ = require("lodash");

const subDao = require("./subDao");
const subConstant = require("./subConstant");

function statusVarify(req, res, next) {
    let token = req.headers.authorization;
    return subDao.tokenExist(token).then(exist => {
        if (exist) {
            if (exist.accountType == "SUPERADMIN") {
                next();
            } else
                return res.json({ Message: exist.accountType + subConstant.MESSAGE.subNotAdd });
        } else {
            return res.json({ Message: subConstant.MESSAGE.tokenNotExist });
        }
    })
}

module.exports = {
    statusVarify
}