import { use } from "react";
import Todo from "./todo";

export default function Todos({todosPromise}){
    const todos = use(todosPromise);
    console.log(todosPromise);
    return (
        <div className="card">
            <h2>All Todos are here: {todos.length}</h2>
            {
                todos.map(todo => <Todo todo={todo}></Todo>)
            }
        </div>
    )
}