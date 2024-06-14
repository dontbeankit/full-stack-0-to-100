const { Todo } = require("../db/db")

async function getTodos(req, res){

    const result = await Todo.find({}).sort({'createdAt': 'desc'})

    if(result){
        res.status(200).send(result)
    }
    else{
        res.status(403).send({msg:"Oops! Something went wrong"})
    }

}

async function createTodo(req, res){
    
    const result = await Todo.create({
        title: req.body.title,
        description: req.body.description,
        done: false
    })

    if(result){
        res.status(200).send({msg:"Success! Todo added"})
    }
    else{
        res.status(403).send({msg:"Oops! Something went wrong"})
    }
}

async function markTodo(req, res){

    const result = await Todo.findOneAndUpdate({
        _id: req.body._id
    },
    {
        done: req.body.done
    })

    if(result){
        res.status(200).send({msg:"Success! Todo status changed"})
    }
    else{
        res.status(403).send({msg:"Oops! Something went wrong"})
    }

}

async function deleteTodo(req, res){

    const result = await Todo.deleteOne({_id: req.body._id})

    if(result){
        res.status(200).send({msg:"Success! Todo deleted"})
    }
    else{
        res.status(403).send({msg:"Oops! Something went wrong"})
    }

}

async function updateTodo(req, res){
    
    const result = await Todo.findOneAndUpdate({
        _id: req.body._id,
    },
    {
        title: req.body.title,
        description: req.body.description
    })

    if(result){
        res.status(200).send({msg:"Success! Todo updated"})
    }
    else{
        res.status(403).send({msg:"Oops! Something went wrong"})
    }
}

module.exports = {getTodos, createTodo, markTodo, deleteTodo, updateTodo}