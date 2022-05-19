const initState = {

    filters: {
        // Ở đây ta có 3 fill: fill search, radio button , mutil select
        search: '',
        status: 'all',
        priority: []

    },

    todoList: [
        // Mỗi thành phần trong đây nó sẽ tượng trưng cho những việc cần làm
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
        { id: 3, name: 'Learn Java', completed: false, priority: 'Low' },
    ]
}

const rootReducer = (state = initState , action) => {
    console.log({state, action});
    /* 
    {
        type: 'todoList/addTodo',
        payload: { id: 5, name: 'Xem Phim', completed: false, priority: 'Medium' }
    }
    */

    switch(action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList, 
                    // { id: 5, name: 'Xem Phim', completed: false, priority: 'Medium' }
                    action.payloat // cập nhật
                ]
            }

            default: 
            return state;
    }
}

// Cài đặt thư viện : npm i uuid
export default rootReducer;