// use express 
const express = require("express");
const Food = require("../models/Food");

// use router trong express
const router = express.Router();


router.get('/filler-title', async (req, res) => {
    try {
        const results =  await Food.find({ title: /Mango$/i }) // /Mango$/i : lấy cả hoa và thường, /^Mango/ : lấy đúng
        res.json({ success: true, results }); // xài
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
})

module.exports = router;