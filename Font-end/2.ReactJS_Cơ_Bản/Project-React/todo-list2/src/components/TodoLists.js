import TodoItems from "./TodoItems";

export default function TodoList(props){

    return(
        <div>
            {props.Todos.map((todo) => (
                <TodoItems/>
            ))}
        </div>
    );
}