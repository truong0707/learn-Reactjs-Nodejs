

// innerText, textContent

var headingElement = document.querySelector('h1');

//geter
// giống nhau
console.log(headingElement.innerText) // Lấy cái text của nó hoặc
console.log(headingElement.textContent) // Lấy cái text của nó hoặc


// seter
headingElement.innerText = 'Hello tau đây' // thay đổi nội dung của thẻ

// khác nhau
var headingElement2 = document.querySelector('h2');

console.log(headingElement2.textContent) // lấy luôn mấy cái khoảng trống luôn
console.log(headingElement2.innerText) 

