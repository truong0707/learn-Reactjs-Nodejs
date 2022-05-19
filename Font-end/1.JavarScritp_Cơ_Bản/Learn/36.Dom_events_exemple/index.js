

// 1. Input / select : dùng để lấy ra các value của inputs khi sử lý form
var inputElement = document.querySelector('input[type="text"]') // lấy ra thẻ inputs có type là text
/* console.log(inputElement) */

// lắng nge sk

// tạo biến lưu value

var value;

inputElement.oninput = function(e) {
    console.log(e.target.value) // lấy ra đc cái element node của chính cái input này và lấy value
    value = e.target.value; // gắn nó vào value
}


// check
var inputElement2 = document.querySelector('input[type="checkbox"]')


inputElement2.onchange = function(e) {
    console.log(e.target.checked) // check cái element node của chính cái input này và lấy value
}



// 2. key up / down : xử lý khi bấm phím trên bàn phím 
