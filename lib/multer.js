const multer = require("multer");
const constant = require("./constant");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './lib/upload')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});
var upload = multer({
    storage: storage
    // fileFilter: function (req, file, callback) {
    //     if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
    //         return callback(new Error(constant.MESSAGES.wrongExtension));
    //     }
    //     callback(null, true);
    // }
}).single('file');

module.exports = upload;