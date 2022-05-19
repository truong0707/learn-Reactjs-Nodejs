
// DOM Events
// 1. Atrribute events : lắng nge sự kiện bằng atribute

// 2. Assign events using the element node : suwe dụng elements node để gán sự kiện

var h1Element = document.querySelector('h1');

console.log(h1Element);

//
h1Element.onclick = function() {
    console.log(Math.random());
} 
