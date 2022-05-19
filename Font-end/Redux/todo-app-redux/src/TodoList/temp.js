                                    // REDUCERS
// là 1 function 
const initValue = { value: 0 } // khởi tạo giá trị state

const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return {
                ...state,
                value: state.value + 1
            }

        default:
            return state;
    }
}
// 1 vài qui tắc ràn buộc của reducer :
// -Giá trị state mới luôn luôn được tính toán dựa trên giá trị của state trước đó
// -Chúng ta ko thể trực tiếp thay đổi giá trị  state hiện tại và chúng ta phải sử dụng inmutebility (tạo phiên bản copy rồi cập nhật lại)
// -Không được code bất kì một đoạn code bất đồng bộ nào, ví dụ như các hành động tính toán (Math.random(),
// Date.name), các hành động side efect như call dữ liệu server
// bởi vì mỗi một lần nó thực thi nó sẽ tạo ra 1 giá trị khác nên chúng ta không thể dự đoán được giá trị trả về của state đó là gì

// ====> bất kì function nào mà tuân theo những ràng buộc trên được gọi là: PURE FUNCTION



// ACTION
const INCREAMENT = {
    type: 'todoList/increment',
    payload: 10
}
// Action creators
// - Là 1 function tạo ra 1 action
const incrementCreator = (data) => {
    return {
        type: 'todoList/increment',
        payload: data
    }
}
incrementCreator(10)



// DISPATCH
// - là 1 function, nhận action , và kích hoạt action đó
dispatch(INCREAMENT)
dispatch(incrementCreator(15))