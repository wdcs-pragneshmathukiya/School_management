var mongoose = require("mongoose");
var constant = require("../constant");
var paginate = require("mongoose-paginate");

var Schema = mongoose.Schema;
var Buy;
var BuySchema = new Schema({
    courseId: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String
    },
    isDelete: {
        type: Boolean
    },
    createdAt: {
        type: String
    },
    PurchaseId: {
        type: String
    },
    PurchaseDate: {
        type: Date,
        default: Date.now
    }
});

BuySchema.plugin(paginate)
Buy = module.exports = mongoose.model(constant.DB_MODEL_REF.BUY, BuySchema);