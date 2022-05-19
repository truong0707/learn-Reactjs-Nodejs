import React from "react";
class TodoItem extends React.Component {

    render() {
        const { completed, id, title } = this.props.todo

        return (
            <li className="todo-item">
                <input type="checkbox" checked={completed}
                    onChange={() => this.props.handleChange(this.props.todo.id)}
                />
                <span className={this.props.todo.completed ? "completed" : null}>
                    {title}
                </span>
                <button className="btn-style" onClick={() => this.props.handleDeleteTodo(id)}>X</button>
            </li>
        );
    }
}

export default TodoItem