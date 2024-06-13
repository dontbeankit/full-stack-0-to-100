//write basic express boilerplate code
//with express.json() middleware

const express = require("express")
const {getTodos, createTodo, markTodo, deleteTodo, updateTodo} = require("./routes/manageTodos")
const {zodcreateTodo, zodupdateTodo, zodcheckId} = require("../backend/types")
const app = express()
const cors = require("cors")

//middlewares

function checkCreatereq(req,res,next){

    obj = req.body
    if(!zodcreateTodo.safeParse(obj).success){
        return res.status(411).json("Wrong input")
    }
    next()
}

function checkupdateTodo(req,res,next){

    obj = req.body
    if(!zodupdateTodo.safeParse(obj).success){
        return res.status(411).json("Wrong input")
    }
    next()
}

function checkTodoId(req,res,next){

    obj = req.body
    if(!zodcheckId.safeParse(obj).success){
        return res.status(411).json("Wrong input")
    }
    next()
}
app.use(cors())
app.use(express.json())


app.post("/todo", checkCreatereq , createTodo)

app.get("/todos", getTodos)

app.post("/completed", checkupdateTodo, markTodo)

app.post("/update", checkTodoId, updateTodo)

app.post("/delete", checkTodoId, deleteTodo)

app.listen(4000, ()=>{
    console.log('Listening on port 4000')
  }) 