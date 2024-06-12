const express = require("express");
const zod = require("zod");

//define type/schema of input: array of numbers
const schema = zod.array(zod.number());
const app = express();

app.use(express.json())

app.post("/add",function(req, res){
    //get response
    const item = req.body.item;
    //check schema of input received
    const response = schema.safeParse(item)
    if(!response.success){
        res.status(411).json({
            msg: "invalid input"
        })
    }
    else{
        res.send({response})
    }
    res.send({})
})

app.listen(3000)
