export default function Todo({todo}){
    return (
        <div className="card">
            <h3 >User Id: {todo.userId}</h3>
            <h4 className="title-center">ID: {todo.id}</h4>
            <h4 className="title-center">{todo.title}</h4>
            <h3>Status: {todo.completed}</h3>
        </div>
    )
}