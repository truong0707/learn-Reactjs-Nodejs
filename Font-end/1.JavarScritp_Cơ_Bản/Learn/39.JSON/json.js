// JSon là 1 định dạng dữ liệu (chuỗi)

// Json nó đc viết tắt của cụm Javarscript Object Notation

// Dạng thể hiện : Number, Boolean, Null, Array

// 2 thao tác : Mã Hóa(Encode) / Giải Mã (decode)

// Stringify: giải mã      Từ JavaScript -->  JSON
 // Parse: dịch ngươc       Từ JSON ---> Javarscript


var Json1 = '1';
var Json2 = 'true';
var Json3 = 'false';
var Json4 = 'null';
var Json5 = '["Truong","Thuong"]';
var Json6 = '{"name": "Thanh Truong", "age":18}';


// chuyển từ chuyển JSON sang JavaScript
var a ='"Truong"';
var b = 'Thanh';

console.log(JSON.parse(a)) // dịch ngược

console.log(JSON.stringify(b)) // giải mã thành JSON