const initState = {
    filters: {
        search: '',
        status: 'all',
        priority: []
    },
    todoList: [
        { id: 1, name: 'learn react', completed: false, priority: 'Medium' },
        { id: 2, name: 'learn Java', completed: true, priority: 'High' },
        { id: 3, name: 'learn Redux', completed: false, priority: 'Low' },
    ]
}

const rootReducer = (state = initState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload,

                ]
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload,
                }
            }
            default:
                return state;
    }
}
export default rootReducer;