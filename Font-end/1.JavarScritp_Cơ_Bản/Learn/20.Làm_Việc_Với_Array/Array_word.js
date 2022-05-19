/* Tất cả những phương thức này đều đều có tham số truyền vào là 1 hàm */
/* hàm truyền vào dưới dạng tham số được gọi là Call back */

var courses = [  /* khai báo khoa học */
    {
        id: 1,
        name: 'JavarScript',
        coin: 250
    },

    {
        id: 2,
        name: 'HTML/CSS',
        coin: 0
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },

    {
        id: 4,
        name: 'PHP',
        coin: 400
    },

    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },

    {
        id: 6,
        name: 'ReactJS',
        coin: 500
    },
]

// 1. forEach() 
courses.forEach((coursess) => {   /* đặt 1 biến course làm tham số của hàm biểu truongj cho từng phần tử OBj trong course*/
    console.log(coursess) // in ra từng phần tử của mảng

});
// bỏ index để xem giá trị index
courses.forEach((coursess, index) => {
    console.log(index, coursess)

});




// 2. every() : kiểm tra tất cả các phần tử cảu mảng ohair thỏa mãn 1 điều kiện gì đó và nó sẽ trả về kiểu boolean

// kiểm tra khóa học có free hay ko
var isFree = courses.every((coursess) => { /*  khai báo 1 biến isFree bằng kết quả khi sử dụng ever */

    return coursess.coin === 0; // return về cái coin của coursess , đây là biểu thức điều kiện
});

console.log(isFree); // nó kiểm tra có phí hay ko và trả về



// 3. some(): Ngược lại với every , chỉ cần 1 ô trong mảng thỏa điều kiện thì ok
var isFree2 = courses.some(function(coursess) {

    return coursess.coin === 0;  
});

console.log(isFree2)



// 4. find() : tìm 1 thằng con trong cái array và chỉ tìm ra 1 ô khi nó gặp và nhả về ngay
// tìm khóa học có name là Ruby

var TimRuBy = courses.find((coursess) => {

    return coursess.name === 'Ruby';
})

// khi tìm ko thấy thì nó sẽ trả về undefine
console.log(TimRuBy) 



// 5. filter(): cũng giông find những nó sẽ trả về tất cả thằng nào muốn kiếm khi đủ điều kiện thỏa mãn
var TimPHP = courses.find((coursess) => {

    return coursess.name === 'PHP';
})

// khi tìm ko thấy thì nó sẽ trả về undefine
console.log(TimPHP) 




// 6. map()

function courseHandler(coursess) {
   return {
       id: coursess.id,
       name: `Khoa Hoc: ${coursess.name}`,
       coin: coursess.coin,
       coinTet: `Gia: ${coursess.coin}`
   }

};
var newCourses = courses.map(courseHandler)

console.log(newCourses)

/* dùng phường thức join() để nối mảng */

// 7. reduce(): nhận về 1 kết quả duy nhất 
const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}