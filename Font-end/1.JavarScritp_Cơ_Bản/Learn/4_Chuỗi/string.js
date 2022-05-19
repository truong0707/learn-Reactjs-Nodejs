/* 1.tạo chuỗi */

var fullName = "Truong";
var Name = new String('Thanh Truong');

// kiểm trả loại 
console.log(typeof fullName)


// 2. Môt số case sử dụng blackslash (\) 
FullName2 = 'Truong là \'Sieu nhân\''; 
console.log(FullName2)

// kiểm tra độ dài 
console.log(FullName2.length)

// nối chuỗi 
var Name2 = " Đây là page học của trường " 
+  "Đây là page học của trường"
+  "Đây là page học của trường";

// 5. Template string ES6

// làm như bth
var firstName = 'Thanh';
var lastName = 'Trường';
console.log("tôi là "+ firstName + lastName);

// template  string
console.log(`Tôi là là : ${firstName} ${lastName}`)