var mongoose = require("mongoose");
var constant = require("../constant");
var paginate = require("mongoose-paginate");

var Schema = mongoose.Schema;
var Admin;
var adminSchema = new Schema({
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
        enum: ["SUPERADMIN", "SUBADMIN", "USER"]
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String
    }
});

adminSchema.plugin(paginate)
Admin = module.exports = mongoose.model(constant.DB_MODEL_REF.ADMIN, adminSchema);