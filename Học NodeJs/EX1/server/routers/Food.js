// use express 
const express = require("express");
// use table bên file models
const Food = require("../models/Food");

// use router trong express
const router = express.Router();




// Các phương thức
// Post
router.get("/", async (req, res) => {
    try {
        const foods = await Food.find();
        res.json({ success: true, foods });

    } catch (error) {
         console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
})


// get
router.post("/", async (req, res) => {
    const {img, title, des, quality, resources, vote} = req.body

    if(!title) return res.status(400).json({success: false, message: "title phải bát buộc"}); // ko thực thi đc thì do lỗi client
    try {
        const newfood = new Food({
            img,
            title,
            des,
            quality,
            resources,
            vote,
        });
        await newfood.save();
        res.json({ success: true, message: "food đã đc post thành công", post: newfood}); // post: newfood sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
})
module.exports = router;