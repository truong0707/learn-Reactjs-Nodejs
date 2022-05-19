// 3. Promise
//  - Sync : đồng bộ
//  - Async : Bất đồng bộ
//  - Lý thuyết, cách hoạt động

// những thằng xảy ra bất đồng bộ
// SetTimeout , setInterval , fetch, 
// XMLHttpprequest :  đọc file
// reqquest animation frame


setTimeout(function () {
    console.log("hi 1");
}, 1000);

console.log("hi 2")


// Nỗi Đau Promise(pain)

// Callback hell
// Bài toán: 1s in ra số 1 ,sau đó 1s in ra số 2, sau đó 1s in ra số 3


setTimeout(function () {
    console.log("Công việc 1");
    setTimeout(function () {
        console.log("Công việc 2");
        setTimeout(function () {
            console.log("Công việc 3");
            setTimeout(function () {
                console.log("Công việc 4");
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// Pyramid of doom



/* Promise(concept) */
// -- thực hành , ví dụ

// tạo ra promise

var promise = new Promise(

    // Executor
    function (resolve, reject) {
        // Logic
        // Thành công: resolver()
        // Thất bại: reject()

        // trạng thái
        resolve([
            {
                id: 1,
                name: 'Truong'
            }
        ]);
        // reject("có lỗi"):
    }
);

// chain
promise
    .then(function () {
        console.log("Thực thi đầu");
    })
    .then(function (courses) {
        console.log(courses);
    })
    .catch(function () {
        console.log("Thất bại");
    })
    .finally(function () {
        console.log("Done");
    })


///

promise
    .then(function () {
        return 1; // thằng bênh dưới nhận đc
    })
    .then(function (data) {
        console.log(data)
        return 2;
    })
    .then(function (data) {
        console.log(data)
        return 3;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
        console.log("Thất bại");
    })
    .finally(function () {
        console.log("Done");
    })



// Bài toán: 1s in ra số 1 ,sau đó 1s in ra số 2, sau đó 1s in ra số 3
// ko đc sử dụng setInterval

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2)
    })
    .then(function () {
        console.log(3)
    })
    .then(function () {
        console.log(4)
    })
