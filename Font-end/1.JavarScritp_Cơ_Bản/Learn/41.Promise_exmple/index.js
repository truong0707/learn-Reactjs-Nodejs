

var users = [
    {
        id: 1,
        name: 'Cong Kien',
    },

    {
        id: 2,
        name: 'Thanh Truong',
    },

    {
        id: 3,
        name: 'Vinh Hung',
    },
]

var comments = [
    {
        user_id: 1,
        id: 1,
        content: 'Anh Truong dep trai qua',
    },

    {
        user_id: 2,
        id: 1,
        content: 'Con phai noi nua em oi'
    }
];


// Cách lấy ra dữ liệu

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// 3. Từ user_id lấy ra user tương ứng

// Tạo Fake API :  mô phỏng ra một cái hàm để thực hiện gọi
// qua cái URL mà ô back-end trả về cho chúng ta lấy đc dữ liệu


// Hàm lấy ra nội dung qua Internet
// Sử dụng promise để xử lý bất đồng bộ

//Fake API lấy comment từ sever về
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve(comments);
        },1000);
    });
};

//Fake API lấy ra userList= user có Id nằm trong mảng UserIds từ sever về
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var userList = users.filter(function(user) { //lặp qua mảng users,
            return userIds.includes(user.id); // lấy ra các phân tử có id nằm tron userIds
        }); 
        setTimeout(function() {
            resolve(userList);
        },1000);
    });
};



getComments() // lấy comment về
    .then(function(comments) {                          //lấy user_id ra để so sánh
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)  //lấy userList có comment về 
            .then(function(userList) {  //*userList là những user có comment, khác users tổng
                return {
                    users: userList,    // tạo data comment và user
                    comments: comments,
                };
            });
    })            
    .then(function(commentData) {
        var commentBlock = document.getElementById('comment-block'); //lấy element comment block
        var html = ''; //tạo đoạn html khởi tạo
        commentData.comments.forEach(function (comment) {  //lặp qua comments lấy ra từng comment 
            var user = commentData.users.find(function(user) {  //lọc users tương ứng comment
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>` // nối mã html
        });

        commentBlock.innerHTML = html;  //chọc mã HTML vào Element DOM
    });



    