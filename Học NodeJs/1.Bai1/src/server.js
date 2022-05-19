const express = require('express');
const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv

const app = express(); // khởi tại app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

configViewEngine(app); // truyền vào app (chính là express)



app.get('/', (rep, res) => {
   res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('Đây là about')
})

// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})