
// Toán tử 3 ngôi (Ternary operator)

// khái báo 1 cái biến khóa học
var course = {
    name: 'JavarScript',
    coin: 250
}

// nếu khóa học có coin > 0 thì sổ ra giá của nó còn nếu không thì nhả ra là miễn phí
if (course.coin > 0) {
   console.log(`giá: ${course.coin} `)
} else {
    console.log('miễn phí')
}


// giải quyết bằng toán tử 3 ngôi
// khai báo biến result . Nếu điều kiện của vế thứ nhất mà đúng  thì nó sẽ lấy giá trị của vế thứ 2 và nếu không
// thì in ra chữ miễn phí
var result = course.coin > 0 ? ` giá: ${course.coin}`  : 'Miễn Phí' 
console.log(result)
