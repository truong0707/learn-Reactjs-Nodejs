/* 1. tham số : là giá trị truyền vào khi gọi 1 function */

// Tạo hàm
function Name() {
    console.log("Đây là tên của tôi")
}
Name();

// Định nghĩa 1 tham só
function Name(message, message2) {
    console.log(message)  // mesage là 1 tham số thứ nhât
    console.log(message2)  // mesage2 là 1 tham số thứ 2
}
Name("Tên tôi đây","Tên tôi đây2"); "Tên tôi đây là 1 đối số"

//  funtion có tính Private (tính riêng tư)

// Arguments        (chỉ sử dụng trong hàm)
function Name2() {
    console.log(arguments)  
}
Name2();

// Gới thiêu vòng For of
function Name3() {
    var myString = ''; 
    for (var param of arguments)  { 
        myString += `${param} - `  // nối
    } 
    console.log(myString);
}
Name3('log1','log2','log3');