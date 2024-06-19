import { useEffect, useState } from "react"

export function TodoItem(props) {
    const [todo, setTodo] = useState({})
    useEffect(()=> {
        setTodo(props.todo)
        }, [todo])
    

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

    function markTodo(){
        const markFn = async()=>{
            const data = await fetch("http://localhost:4000/completed",{
                method: "POST",
                body:JSON.stringify({
                    _id:todo._id,
                    done:(!todo.done)
                }),
                headers:{
                    "Content-type":"application/json"
                }
                
            })
            const json = await data.json()
            props.changeDoneTodos(todo)
            const temptodo = todo
            temptodo.done = !todo.done
            setTodo(temptodo)
            //props.deleteContent(todo)
            //alert(json.msg)
        }
        markFn()
    }
    


    return (<div key={todo._id} className={todo.done != true ? "item-container" : "item-container-done"}>
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
        <div>
        <button onClick={markTodo} className={todo.done != true ? "markbutton" : "undobutton"}><span className="material-symbols-outlined">{todo.done != true ? "check" : "redo"}</span></button>
        <button onClick={deleteTodo} className="markbutton-light"><span className="material-symbols-outlined">delete</span></button>
        </div>
        </div>)
}