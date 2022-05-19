
// Câu Điều kiện If

//  Ví dụ: Kiểm tra ngày để biết hôm nay là thứ mấy

var date = 2;

// bắt toàn bộ điều kiện cho là đúng 
if (date === 2) {
    console.log("Đây là thứ 2")
}

if (date === 3) {
    console.log("Đây là thứ 3")
}

if (date === 4) {
    console.log("Đây là thứ 4")
}

// Chỉ bắt 1 thằng đúng đầu tiên đây là câu lệnh rẽ nhánh
// chỉ lọt vào 1 nhánh nào đúng
if (date === 2) {
    console.log("Đây là thứ 2")
} else if (date === 3) {
    console.log("Đây là thứ 3")
} else if (date === 4) {
    console.log("Đây là thứ 4")
} else {
    console.log("không biết ngày") // khi ko có thằng nào
}
