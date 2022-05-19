
// For Loop
// ví dụ in ra 1 - 1000

/* for(var i = 1; i <= 1000; i++){
    // code được chạy tương ứng với số lần
    console.log(i);

}
 */


// Ứng dụng của vòng lặp for để lấy ra phần từ cảu 1 mảng

// jhai báo 1 mảng là myArray
var myArray = [
    'JavarScript',
    'PHP',
    'Java',
    'Dart'
]

// lấy ra các phần tử của mảng
console.log(myArray[0]) // lấy ra index đầu tiên

// dùng vòng for để lấy ra các giá trị cảu mảng

// đầu tiên lấy ra độ dài array
var arrayLength = myArray.length
for (i = 0; i <= arrayLength; i++  ) {
   console.log(myArray[i]) // lấy ra tất cả phần tử của mảng
}