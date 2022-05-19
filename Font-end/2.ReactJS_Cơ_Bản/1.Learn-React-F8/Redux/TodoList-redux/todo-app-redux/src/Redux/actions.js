// export const addTodoAction = {
//     type: 'todoList/addTodo', // tên tính năng
//     payloat: { id: 5, name: 'Xem Phim', completed: false, priority: 'Medium' }
// }

// action creators => function
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payloat: data
    }
}



// ---> trở lại UI