import Header from "./layput/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo"
import React from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import "../App.css"

class MyApp extends React.Component {
    state = {
        todos: [

        ]
    };

    handleCheckboxChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    handleDeleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })

            ]
        });

    };
    addTodo = (title) => {

        // const todoData = {
        //     title: title,
        //     completed: false
        // }
        // axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
        //     .then(response => {
        //         console.log(response.data)
        //         this.setState({
        //             todos: [...this.state.todos, response.data]
        //         })
        //     });

        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });

    }

    componentDidMount() {
        const config = {
            params: {
                _limit: 6
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(res => this.setState({ todos: res.data }))
            .catch(err => {
                console.log("Loi:" + err)
            })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos
                    Todos={this.state.todos}
                    handleChange={this.handleCheckboxChange}
                    handleDeleteTodo={this.handleDeleteTodo}
                />
            </div>
        )
    }
}

export default MyApp;