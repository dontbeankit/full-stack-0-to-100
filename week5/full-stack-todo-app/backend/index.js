//write basic express boilerplate code
//with express.json() middleware

const express = require("express")
const {getTodos, createTodo, markTodo} = require("./routes/manageTodos")

const app = express()



app.use(express.json())

app.post("/todo", createTodo)

app.get("/todos", getTodos)

app.post("/completed", markTodo)

app.listen(4000)