// tạo mảng

var Name= [
    "Truong",
    "Vu",
    "Quang",
    null,
    undefined,
    function(){

    },
    {} // object
]

console.log(Name)

// kiểm tra có phải là array hay ko
console.log(Array.isArray([]))
console.log(Array.isArray({})) // Object


// kiểm tra phần tử của mảng
console.log(Name.length)

// Lấy chỉ mục trong mảng 
console.log(Name[0])  // chỉ mục đầu tiên
console.log(Name[1])  // chỉ mục thứ 2