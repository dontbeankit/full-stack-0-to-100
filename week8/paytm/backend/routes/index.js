const { Router } = require("express");
const mainRouter = Router();
const { userRouter } = require("./routes/user");
const { accRouter } = require("./routes/account");

mainRouter.use('/user',userRouter)
mainRouter.use('/account',accRouter)


mainRouter.get('login',(req,res)=>{

})

mainRouter.post('signup',(req,res)=>{
    
})

mainRouter.post('signup',(req,res)=>{
    
})