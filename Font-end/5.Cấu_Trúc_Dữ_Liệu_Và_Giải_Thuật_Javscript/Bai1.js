// 1. Khởi tạo 1 đối tượng 

function Student(userName) {
    this.userName = userName;
    // 2. thêm các thuộc tính
    this.age = '20';
    this.country = 'Da Nang';
    this.run = function() {

    }
}
// 3. tạo funtion property ở bên ngoài
Student.prototype.showInfo = function() {
    console.log('Tên của bạn: ' +  this.userName + 'tuổi:' + this.age + 'country: '+ this.country)
}

var Truong = new Student('thanh truong');
console.log(Truong)

// 4. Gọi đến đối tượng Student và gọi đến showInfo
Truong.showInfo();

console.log(Student.prototype)



/////////////////////////////////
function SucVat() {
    this.nameSucVat = 'con bò';
    this.tuoiSucVat = '2 năm';    
}

var conBo = new SucVat()
