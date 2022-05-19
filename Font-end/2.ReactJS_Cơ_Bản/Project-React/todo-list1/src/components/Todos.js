import React from "react"
import TodoItem from "./TodoItem"

class Todos extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.Todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleChange={this.props.handleChange}
                        handleDeleteTodo={this.props.handleDeleteTodo}
                        />
                    ))}

                    {/* {this.props.Todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))} */}
                </ul>
            </div>
        )
    }
}

export default Todos