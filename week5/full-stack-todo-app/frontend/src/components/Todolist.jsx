import "./todolist.css"

export function TodoList(props){
    const todos = props.todos
    console.log(todos)

    return ( 
    <div> 
        {todos && todos.map((todo)=>{
            return  <div className="item-container">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button className="markbutton">{todo.done == true ? "Done" : "Mark as done"}</button>
        </div>
        })}
        {!todos && <div>Network Error</div>}
    </div>
        
    )
}