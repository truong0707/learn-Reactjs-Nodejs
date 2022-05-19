import Header from "./layouts/Header";
import TodoList from "./TodoLists";

import { useState } from "react"


export default function MyApp(){
    const [ todos, setTodos ] = useState({
        todos: ["cc", "id"]
    })

    return(
        <div className="container">
            <Header/>
            <TodoList Todos={todos.todos} />
        </div>
    );
}