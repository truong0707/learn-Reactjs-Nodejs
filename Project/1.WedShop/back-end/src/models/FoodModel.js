const monggose = require("mongoose");
const Schema = monggose.Schema;

// init
const FoodSchema = Schema({
    img: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        require: true,
        trim: true, // no space
        max: 30,
    },
    des: {
        type: String,
    },
    quality: {
        type: Number,
        require: true,
        trim: true,
    },
    resources: {
        type: String,
        require: true,
    },
    vote: {
        type: String,
    }
})

module.exports = monggose.model('foods', FoodSchema) // tham số thứ nhất là tên của bảng
 