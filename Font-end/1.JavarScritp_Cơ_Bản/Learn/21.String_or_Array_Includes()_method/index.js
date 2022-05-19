
// includes method

// là phương thức mà nó tồn tại sẵn trong prototype của hai đối tượng là Array vá String
console.log(Array.prototype.includes);
console.log(String.prototype.includes);


/*  khi sử dụng với String */

var title = 'Hello  cu truong dep trai';
console.log(title.includes('truong', 2)) // đối số thứ nhất trả về true nếu có 'truong' và false nếu ko có 'truong'
                                           // đối sô thứ hai là vị trí bắt đầu tìm kiếm

   /* khi sử dụng cho thằng aray */
var courses = ['Java','PHP', 'Dark'];
console.log(courses.includes('PHP'))
