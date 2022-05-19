// Đối tượng Date
var date = new Date();  // nó sẽ trả về 1 đối tượng date và có thể truy xuất được

console.log(typeof date) // kiểm tra cái dối tượng Date bằng typeof 
console.log(date) // nhả nó ra màn hình và nó sẽ nhà ra thời gian hiện tại 

// những cái phuong để get ra từ đối tượng
var Day = date.getDate()    
console.log(Day)

var Month = date.getMonth()  // tháng nó sẽ tính bắt đầu từ 0 nên chúng ta cộng thêm 1 để đúng với tháng hiện tại
console.log(Month + 1)

var Year = date.getFullYear()
console.log(Year)

console.log(`${Day}/ ${Month}/ ${Year}`) // nhả ra ngày tháng năm
