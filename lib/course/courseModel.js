var mongoose = require("mongoose");
var constant = require("../constant");
var paginate = require("mongoose-paginate");

var Schema = mongoose.Schema;
var Course;
var courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['ACTIVATE', 'DEACTIVATE']
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

courseSchema.plugin(paginate);
Course = module.exports = mongoose.model(constant.DB_MODEL_REF.COURSE, courseSchema);