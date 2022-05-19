//action
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 5, name: 'learn football', completed: false, priority: 'Medium' },
// }

// action creators
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}


export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}