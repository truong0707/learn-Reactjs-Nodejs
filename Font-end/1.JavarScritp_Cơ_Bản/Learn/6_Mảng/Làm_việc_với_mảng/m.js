
var Name = [
    'Truong',
    'Thanh',
    'Quang',
    'Vu'
]

// Chuyển kiểu dữ liệu trong mảng thành String
console.log(Name.toString()) // đc ngăn cách bởi dấu phẩy

console.log(Name.join('+')) // có ngăn cách

//  2. POP và Shifp
console.log(Name.pop()) // Xóa phần tử ở cuối mảng và trả ra phần tử đã xóa
// Shifp
console.log(Name.shift()) // Xóa phần tử ở đầu mảng và trr ra phần tử đã xóa

//  3.PUSH
console.log(Name.push('Thao','Trinh')) // thêm các phần tử vào mảng và trả về đồ dài của mảng

//  4. Unshift
console.log(Name.unshift('Dart','n')) //  thêm các phần tử vào đầu mảng và trả về đồ dài mảng

//  5. Splicing
Name.slice(1, 1) // xóa vị trí bất kì
Name.slice(1, 0, 'Chèn')
console.log(Name)

// 6. Concat (nối 2 Array)

var languages = [
   'Java',
   'JavarScript',
   'PHP'
]
console.log(Name.concat(languages))

// Slicing  (cắt lấy 1 vài elemrnt từ mảng)
console.log(languages.slice(1, 2))



