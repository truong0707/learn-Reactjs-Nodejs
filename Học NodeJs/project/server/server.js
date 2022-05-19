// sử dụng biến môi trường
require("dotenv").config();
// sử dụng express
const express = require('express');
// sử dụng monggose DB
const monggose = require('mongoose');

// sử dụng Router bên Food Router
const foodRouter = require("./routers/Food");
// Sử dụng api
const ApiFoodRouter = require("./routers/ApiFood");





// kết nối mongoose
const connectDB = async () => {
    try {
        await monggose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ijdmi.mongodb.net/Truongphanone12?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongoose connected')
    } catch (error) {
        console.error(error.message);
        process.exit(1); // mã lỗi
    }
}
connectDB();

const app = express()
app.use(express.json()); // use express json (khi post lên)
// app.get('/', async (req, res) => {
//     res.send('hello word')
// }).listen(3000)
app.use("/api/food", foodRouter);
app.use("/api/food", ApiFoodRouter)


const PORT = 4000;

app.listen(PORT, () => console.log(`server chạy trên port ${PORT}`));