var Infor = {
   name: 'Nguyen Thanh Trương',
   age: 20,
   address: 'DaNang'
};

for (var keysss in Infor) {
    console.log(keysss)
    console.log(Infor[keysss]) 
}


/// Tương tự For-of cung vậy , nhưng for-of là dùng cho mảng, còn for-in dùng cho ObJ

// Để biển đối tượng trả về 1 mảng thì sử dụng

/* console.log(Object.keys(tênmảng)) */