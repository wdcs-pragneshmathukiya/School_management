var constant = require("../constant");

class APIResponse {
    constructor(sc, result) {
        this.status = sc;
        if (sc = constant.STATUS_CODE.SUCCESS) {
            result ? this.response = result : constant.EMPTY;
        } else {
            result ? this.error = result : constant.EMPTY;
        }
        this.time = now.Date().getTime();
    }
}


module.exports = APIResponse;