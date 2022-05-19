// LÀM VIỆC VỚI CHUỖI
var  myString = 'Nguyen Thanh Trưong'

// 1. Length (độ dài của chuỗi)
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf("Th")); // tìm Th trong chuỗi
console.log(myString.indexOf("Th"),6); 
console.log(myString.lastIndexOf("Th")); // tìm Th ở vị trí cuối cùng trong chuỗi
 // ko tìm ddc thì thì trả về -1

 // search
 console.log(myString.search("Ng")); // tìm Ng

 // Cut String (Cắt chuỗi)
console.log(myString.slice(4,6));
// cắt ngược
console.log(myString.slice(-6, -1));

// 4. Replace
console.log(myString.replace('Nguyen', 'Tran')); // thay thế Nguyen bằng Tran
// tìm và tất cả các index "Nguyen" từ biểu thức chính quy / /g
console.log(myString.replace(/Nguyen/g, 'Tran'));


// 5. Convert to upper case (Chuyển đổi tất cả chuỗi thành chữ hoa)
//    Convert to lower case (Chuyển đổi tất cả chuỗi thành chữ thường)
console.log(myString.toLocaleUpperCase);
console.log(myString.toLowerCase)


// 6. Trim (loại bỏ các khoảng trắng thừa ở hai đầu)
console.log(myString.trim)

// 7.Split (Cắt 1 chuỗi thành 1 array)
var languages = 'JavarScript, PHP, Ruby'
console.log(languages.split(', '))

// 9. Get a character by index (lấy đc kí tự từ index)
const myString2 ='Thanh Truong';
console.log(myString2.charAt(10))



