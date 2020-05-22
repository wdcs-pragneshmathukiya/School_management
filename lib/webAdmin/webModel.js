const mongoose = require("mongoose");
const constant = require("../constant");
const paginate = require("mongoose-paginate");

let Schema = mongoose.Schema;
let WebAdmin;
let webAdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER",
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

webAdminSchema.plugin(paginate)
WebAdmin = module.exports = mongoose.model(constant.DB_MODEL_REF.WEBADMIN, webAdminSchema);