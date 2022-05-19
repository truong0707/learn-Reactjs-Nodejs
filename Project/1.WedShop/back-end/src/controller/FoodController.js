const FoodModel = require('../models/FoodModel');



let getAllFoods = async (req, res) => {
    try {
        const foods = await FoodModel.find();
        res.status(200).json({ success: "ok", foods });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

let postAllFoods = async (req, res) => {
    const { img, title, des, quality, resources, vote } = req.body

    if (!title) return res.status(400).json({ success: false, message: "title phải bát buộc" }); // ko thực thi đc thì do lỗi client
    try {
        const newfood = new FoodModel({
            img,
            title,
            des,
            quality,
            resources,
            vote,
        });
        await newfood.save();
        res.json({ success: true, message: "food đã đc post thành công", post: newfood }); // post: newfood sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

module.exports = {
    getAllFoods,
    postAllFoods
}