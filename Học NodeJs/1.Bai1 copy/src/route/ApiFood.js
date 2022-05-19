const express = require('express');
const FoodController = require('../controller/FoodController');
let router = express.Router();

const initApiFood = (app) => {
    router.get('/foods', FoodController.getAllFoods); // method get --> read data
    router.post('/foods', FoodController.postAllFoods); // method post --> lưu data

    return app.use('/api/v1/', router);
}

module.exports = initApiFood;