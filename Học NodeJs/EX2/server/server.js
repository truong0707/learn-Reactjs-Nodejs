require("dotenv").config(); // sử dụng biến môi trường
const express = require('express') // use express
const bodyParser = require('body-parser') // use body parser // đọc dữ liệu client gửi lên và chuyển sang OJB và lưu trữ trong res.body
const mongoose = require('mongoose'); // use mongoose




// function Kết nối mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ijdmi.mongodb.net/Truongphanone12?retryWrites=true&w=majority`, {
            useNewUrlParser: true, // cú pháp phân tích cú pháp chuỗi URL của mongoose
            useUnifiedTopology: true, // cú pháp loại bỏ hỗ trợ cho  của mongoose số tùy chọn trong mongoose
        });
        console.log("connect mongoose DB thành công!")
    } catch (error) {
        console.error("lỗi kết nối DB:" + error.message);
        process.exit(1) // báo lỗi 
    }
}
connectDB()

const app = express(); // tạo biến gắn giá trị express đã import phía trên
const port = 5000; // khai báo port


// seting view engine cho pug
app.set('view engine', 'pug');
app.set('views', './views');
// seting body parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// datas
var users = [
    { id: 1, name: 'Truong' },
    { id: 2, name: 'Vu' },
    { id: 3, name: 'Quang' },
    { id: 4, name: 'Tuan' },
];


app.get('/', (req, res) => {
    res.render('index', {
        name: "hello localhost"
    })
})


    
app.get('/users', (req, res) => {
    res.render('users', {
        users: users
    })
})
    



app.get('/users/search', function (req, res) {
    var q = req.query.q; // lấy key
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    }) 
    // console.log(req.query); /* ?q=truong&age=21 */

    res.render('users', {
        users: matchedUsers
    });
})


app.get('/users/create', function(req, res) {
    res.render('createUser')
})
app.post('/users/create', function(req, res) {
    // console.log(req.body)
    users.push(req.body); // nhập dữ liệu đó vào user
    res.redirect('/users') // chuyển về lại trang
});



// Lắng nghe port
app.listen(port, () => {
    console.log(`Đây là ví dụ lắng nge port ${port}`)
})


