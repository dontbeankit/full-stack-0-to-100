const express = require('express')
const { kidney } = require('./kidneyModel')

const app = express()//creates server

app.use(express.json())

let kidneyObj = new kidney(0,0)
let list = []
//define the route and when user loads it return a response on page
app.get("/",function(req, res){
    //show list of kidneys
    res.send(list)
})

app.post("/",function(req, res){
    //get new kidney details
    const newid = req.body.id
    const newhealth = req.body.health
    list.push(new kidney(newid,newhealth))
    res.send(list)
})

app.patch("/",function(req, res){
    //get new kidney details
    const id = req.body.id
    list.forEach(kidney => {
        if (kidney.getId() === id) {
            kidney.setHealth(req.body.health);
        }
    });
    res.send(list)
})

app.delete("/",function(req, res){
    //get new kidney details
    const id = req.body.id
    list.pop(new kidney(newid,newhealth))
    res.send(list)
})


app.listen(3000)//starts the server on port 3000