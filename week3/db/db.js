const mongoose = require("mongoose")
const express = require("express");

const app = express();

mongoose.connect("mongodb+srv://[USERNAME]:[PASSWORD]$@mern-app.vfwjbld.mongodb.net/full_stack")
//define db name: /full_stack
// try{
//     const user = mongoose.model('users',{
//         name: String,
//         email: String,
//         password: String
//     })
    
//     const newUser = new user({
//         name: "Ankit",
//         email: "ace@akr.com",
//         password: "pass112@"
//     })
    
//     newUser.save()
// }catch(e){
//     console.log(e)
// }

    const user = mongoose.model('users',{
        name: String,
        email: String,
        password: String
    })

app.use(express.json())

app.post('/signup',(req,res)=>{
    const name = req.body.username
    const email = req.body.email
    const pass = req.body.pass
    
    const newUser = new user({
        username: name,
        email: email,
        password: pass
    })
    
    newUser.save()
    return res.status(200).json({
        msg: "Success",
      });
    }
)

app.listen(3000)