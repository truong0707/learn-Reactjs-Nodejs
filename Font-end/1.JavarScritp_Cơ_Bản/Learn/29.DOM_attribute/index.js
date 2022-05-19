

// DOM atributes

var headingE = document.querySelector('h1') 
/* console.log(headingE) */

// sử dụng seter bằng toán tử gắn
headingE.title = 'Heading' // thêm cái title vào dom
headingE.id = 'Heading' // thêm cái id vào dom
headingE.className = 'Heading' // thêm cái class vào dom
/* headingE.href ="" */


// sử dụng phương thức
var headingE2 = document.querySelector('h2') 

headingE2.setAttribute('class', 'heading')


// get ra value
var headingE3 = document.querySelector('h3') 

console.log( headingE3.getAttribute('class') )// lấy ra heading text của class 