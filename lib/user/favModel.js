var mongoose = require("mongoose");
var constant = require("../constant");
var paginate = require("mongoose-paginate");

var Schema = mongoose.Schema;
var Fav;
var FavSchema = new Schema({
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
    favId: {
        type: String
    },
    addFavDate: {
        type: Date,
        default: Date.now
    }
});

FavSchema.plugin(paginate);
Fav = module.exports = mongoose.model(constant.DB_MODEL_REF.FAVORITE, FavSchema);