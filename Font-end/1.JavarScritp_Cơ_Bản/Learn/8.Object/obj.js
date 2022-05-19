

// Tạo object

var myInfor = {
    name: 'Thanh Truong',
    age: 20,
    address: 'Da Nang, VN'
};

myInfor.email ='truong48269@edu.vn';  // gán thêm giá trị email

console.log(myInfor);
console.log(myInfor['name']) // in 


var myKey = 'address';
console.log(myInfor[myKey]); // lấy nội dung của address


// Xóa key 
delete myInfor.age //  xóa age