

/* Math Object */

// math ko phải là 1 obj contructer và ko thể nào khỏi tạo nó
// nó dùng để thức dụng nó để truy xuất những  phương thức thuộc tính  


// Math.PI : nó trả lại số PI 
console.log(Math.PI);

// Math.round() : làm tròn số
console.log(Math.round(1.8));


// Math.abs() : giá trị tuyệt đối
console.log(Math.abs(-4));


// Math.ceil() : làm tròn trên
console.log(Math.ceil(4.1));


// Math.floor() : Làm tròn dưới
console.log(Math.floor(4.99999));


// Math.random(): trả về dãy số thập phân nhỏ hơn 1
console.log(Math.random()); // Mỗi lần f5 lại thì nó đều random ra sô thập phân nhỏ hơn 1
// ứng dụng để random ngãu nhiên số từ 1 tới 10
console.log(Math.floor(Math.random() * 10));
// ứng dụng random làm game
var randoms = Math.floor(Math.random()* 100);

if (randoms < 50) {
    console.log('cường hóa thành công')
} else {
    console.log('cường hóa ko thành công')
}


// Math.min(): Lấy ra con sô nhỏ nhất
console.log(Math.min(-100, 1, 90, 50, 40));


// Math.max() 
console.log(Math.max(-100, 1, 90, 50, 40));