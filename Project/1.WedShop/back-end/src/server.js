const express = require('express');
const mongoose = require('mongoose');
const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv

const initWebRoute = require('./route/web');
const initApiFood = require('./route/ApiFood');
const initApiCardProduct = require('./route/ApiCardProduct');

const app = express(); // khởi tại app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors')
app.use(cors()) // Use thư viện cors để có thể gọi api từ bên front


/// kết nối mongoDB bằng mongose
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ijdmi.mongodb.net/Truongphanone12?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1); // mã lỗi
    }
}
connectDB();

app.use(express.json()); // use express json (khi post lên)
configViewEngine(app); // set up view engine (chính là express)


// router
initWebRoute(app) // gọi hàm initWebRote
initApiFood(app) // init api food route
initApiCardProduct(app) // init api productCard




// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})