
// Lệnh rẽ nhánh Switch

var date = 4;

switch (date) {
    // case : có nghĩa là trường hợp
    case 2:  // trường hợp bằng 2
        console.log("hôm nay là thứ 2")
        break; // thoát khỏi khối lệnh

    case 3:  // trường hợp bằng 3
        console.log("hôm nay là thứ 3")
        break;

    case 4:  // trường hợp bằng 4
        console.log("hôm nay là thứ 4")
        break;

    case 5:  // trường hợp bằng 5
        console.log("hôm nay là thứ 5")
        break;
}

// trường hợp khác
// nó ko có break nên nó sẽ lọt vào hết 
switch (date) {
    // case : có nghĩa là trường hợp
    case 2:  // trường hợp bằng 2
    case 3:  // trường hợp bằng 3
    case 4:  // trường hợp bằng 4
        console.log("hôm nay là thứ 2,3,4")
        break;

    case 5:  // trường hợp bằng 5
        console.log("hôm nay là thứ 5")
        break;
    default:
        console.log("không biết") // nếu nó ko có 
}

