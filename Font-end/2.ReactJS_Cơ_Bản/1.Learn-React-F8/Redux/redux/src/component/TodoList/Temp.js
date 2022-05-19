/* LÝ THUYỂT */



// Cấu trúc của Redux

/*  REDUCERS */
// - nó chỉ là 1 function cơ bản , nó sẽ nhận 2 tham số: là state và action
// - và state sẽ có giá trị khởi tạo
// - trong reduces nó sẽ kiểm tra dựa trên tham số acction để thì nó sẽ thực hiện đoạn code để 
// cập nhật lại giá trị state 
const initValue = { value: 0 }

const rootReducer = (state, action) => {
    switch (action.type) { // kiểm tra dựa trên acction 
        case 'INCREMENT':
            return { // cập nhật lại giá trị state  (inmobility) 
                ...state,  // giữ lại state hiện tại 
                value: state.value + 1 // cập nhật lại state công giá trị 1 
            }
        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload  // update lại // 0 + 10 = 10
            }
        // switch thì phải dùng default, khi không thỏa mãn case thì nó nó sẽ đi vào default 
        default:
            return
    }

}


// Những nguyên tắc ràng buộc của REDUCERS như sau:
// - Giá trị của State mới luôn luôn được dự đoán vào giá trị state(chính là tham số thứ nhất) 
// cũ trước đó
// - Ràng buộc thứ 2 là chúng ta không đc phép thay đổi sate hiện tại này mà ta phải dùng inmobility 
// - Thứ 3 là chúng ta không được code một đoạn code bất đồng bộ nào ở trong reducers,
// ví dụ như là: Math.random(), Date.now()..., các hình động side efect, hành động res đến server

// Theo những ràng buộc ở trên thì nó đc gọi là  ===> PURE FUNCTION
// --> Bởi vì mục đích của thằng redux là làm cho ta dự đoán được(redictable)
// -->  Giúp cho ta có thể ddebub đc ở phía UI : để ta xem đc state này ở từng thời điểm nó có giá trị
// là gì? và hành  động nào đã cập nhật lại giá trị state đó với những giữ liệu như thế nào bằng công 
// cụ react tool của redux.






/////////////////////////////////////////////////////////////////////////////////////////////////////////

                    /*  ACTION  */
// - nó chỉ đơn là là  1 Object do chúng ta qui định
const INCREMENT = { /* (1)  */
    type: 'todoList/increment', // hành động
    payload: 10, // giá trị payload ta cho là  10
}

 /*  Action creators */
// - Nó giúp ta ko phải viết các ojb 1 cách lặp đi lặp lại
// - Thay vì chúng ta tạo nhiều thì ta chỉ việc truyền vào dũ liệu thôi
const increamentCreator = (data) => {
    return {
        type: 'todoList/increment',
        payload: data,
    };
};

increamentCreator(10);


////////////////////////////////////////////////////////////////////////////////////////////////////////


 /* DISPATCH */
 // - Nó cũng chỉ là 1 cái function
 // - nó đc sử dụng để cập nhật lại  state trong store

 // ---> và nó sẽ nhận đc 1 tham số Action (học ở trên)

 // + Việc mà chúng ta dispatch có thể hiểu nó giông như một việc chúng ta bắn đi 1 action ,nó sẽ
 // bắn đi từ phía IU 
 // Ví dụ trên UI  chúng ta nhấn vào 1 button nào đó thì trong hàm xử lý của sự kiện click đó ,
 // thì chúng ta  gọi đến dispatch một cái Action, thì lúc này từ phía UI nó sẽ bắn đi 1 Action với
 // cái giữ liệu mà chúng ta mô ta ở trên (1) vào thằng Store, và thằng reducers trong store nó sẽ nhận
 // đc dữ liệu đó (và đó chính là hai cái tham số current state và acction hiện tại mà ta vừa thực hiện)
 // dispatch 
 
 // ---> và đó là cách mà để chúng ta có thể cập nhật lại đc State ở trong 1 kho chung bằng cách sử dụng
 // dispatch (và nó là cách duy nhất trong redux để có thể cập nhật lại state chung trong kho) 
 dispatch(INCREMENT)
 dispatch(increamentCreator(15))



/// 33.36