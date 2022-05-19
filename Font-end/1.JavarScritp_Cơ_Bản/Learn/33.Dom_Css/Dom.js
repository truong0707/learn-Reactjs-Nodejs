




var boxElement = document.querySelector('.box');


console.log(boxElement);
console.log(boxElement.style);  // xem thuộc tính css

/* boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'pink'; */


/*  làm cách khác */
// assing(): nhận nhiều đối số
Object.assign(boxElement.style, {

    width: '100px',
    height: '200px',
    backgroundColor : 'pink',
})