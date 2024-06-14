import "./todolist.css"

export function TodoList(props){
    const todos = props.todos
    console.log(todos)

    return ( 
    <div> 
        {todos && todos.map((todo)=>{
            return  <div className={todo.done != true ? "item-container" : "item-container-done"}>
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
                <div>
                <button className={todo.done != true ? "markbutton" : "undobutton"}><span className="material-symbols-outlined">{todo.done != true ? "check" : "redo"}</span></button>
                </div>
            
            
        </div>
        })}
        {!todos && <div>Network Error</div>}
    </div>
        
    )
}