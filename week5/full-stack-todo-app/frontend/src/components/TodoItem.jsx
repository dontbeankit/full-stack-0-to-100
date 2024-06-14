
export function TodoItem(props) {
    const todo = props.todo

    function deleteTodo(){
        const deleteFn = async()=>{
            const data = await fetch("http://localhost:4000/delete",{
                method: "POST",
                body:JSON.stringify({
                    _id:todo._id
                }),
                headers:{
                    "Content-type":"application/json"
                }
                
            })
            const json = await data.json()
            
            props.deleteContent(todo)
            alert(json.msg)
        }
        deleteFn()
    }


    return (<div key={todo._id} className={todo.done != true ? "item-container" : "item-container-done"}>
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
        <div>
        <button className={todo.done != true ? "markbutton" : "undobutton"}><span className="material-symbols-outlined">{todo.done != true ? "check" : "redo"}</span></button>
        <button onClick={deleteTodo} className="markbutton-light"><span className="material-symbols-outlined">delete</span></button>
        </div>
        </div>)
}