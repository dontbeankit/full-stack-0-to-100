const { Router } = require("express");
const mainRouter = Router();
const { userRouter } = require("./user");
const accRouter = require("./account");

mainRouter.use('/user',userRouter)
mainRouter.use('/account', accRouter)


module.exports = { mainRouter }