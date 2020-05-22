var mongoose = require("mongoose");
var constants = require("../constant");
var paginate = require("mongoose-paginate");

var Schema = mongoose.Schema;
var User;
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountType: {
        type: String,
        enum: ['TEACHER', 'STUDENT']
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['USER', 'SUPERADMIN', 'SUBADMIN'],
        default: 'USER'
    },
    referalCode: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String
    }
});

UserSchema.plugin(paginate);
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);