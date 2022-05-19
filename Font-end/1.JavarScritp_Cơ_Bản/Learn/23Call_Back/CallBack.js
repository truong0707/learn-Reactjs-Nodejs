
// Call Back

/* Là hàm Function được truyền qua đối số khi gọi hàm khác
     Tóm lại:  
     Nó là hàm 
     Được truyền qua đối số */

function myFunction2(cc) {
    console.log(typeof cc)
}

myFunction2('Chào trường'); // là chuỗi

function myFunction(param) {
    if (typeof param === 'function') {
         param("học lập trình")
    }
   
}

function myCallBack(value) {

 console.log('value:', value);
}

myFunction(myCallBack); // là function
