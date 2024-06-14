import { useState } from "react"
import "./createTodo.css"
export function CreateTodo(){

    const [title, setTitle]= useState("")
    const [desc, setDesc]= useState("")
    
    function createHandler(e){

        fetch("http://localhost:4000/todo",{
            method: "POST",
            body:JSON.stringify({
                title:title,
                description:desc
            }),
            headers:{
                "Content-type":"application/json"
            }
            
        }).then(async function(res){
            const json = await res.json()
            console.log(title+desc)
            alert(json.msg)
        })
    }

    return(
        <div className="form">
            <input type="text" placeholder="Enter title" onChange={ function(e){ setTitle(e.target.value) } } />
            <input type="text" placeholder="Enter description" onChange={ function(e){ setDesc(e.target.value) } }/>
            <button onClick={createHandler}><span className="material-symbols-outlined">add</span></button>
        </div>
    )
}