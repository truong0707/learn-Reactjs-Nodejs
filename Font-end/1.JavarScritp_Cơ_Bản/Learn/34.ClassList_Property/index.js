

/* ClassList PropertiesX  */


var boxElement = document.querySelector('.box')

/* console.log(boxElement.classList);  */// xem thuộc tính


// add : thêm class vào elements
boxElement.classList.add('red', 'blue') // thêm nhiều class

// contains: kiểm tra 1 class có nằm elements đó hay ko
console.log(boxElement.classList.contains('red')) // trả về true là có


// remove : xóa bỏ 1 class trong elements của bạn
/* setTimeout(() =>{
    boxElement.classList.remove('red')
},3000) */

// toggle: xóa bỏ class nếu có và thêm nếu ko có
/* setTimeout(() =>{
    boxElement.classList.toggle('red')
},3000) */

setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000)

