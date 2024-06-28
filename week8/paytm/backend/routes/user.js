const { Router } = require("express");
const userRouter = Router();
const zod = require('zod');
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

function validateUserSignUp(req,res, next){
    const UserSchema = zod.object({
        username: zod.string().email(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string(),
      });

    if(!UserSchema.safeParse(req.body)){
        return res.status(401).json({
            message: "Invalid input"
        })
    }
    next()

}

userRouter.post('/signup', validateUserSignUp, async (req,res)=>{
    const user = await User.findOne({
        username: req.body.username
    })

    if(user){
        return res.status(403).json({
            message: "User already exists"
        }) 
    }

    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    if(newUser && newUser._id){
        console.log(newUser._id)
        await Account.create({
            userID: newUser._id,
            balance: 1 + Math.random() * 10000
        })
    
        const userId = newUser._id;
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
    
        return res.status(200).json({
            message: "User created successfully",
            token: token,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        }) 
    }
    

})

function validateUserLogin(req,res, next){
    const UserSchema = zod.object({
        username: zod.string().email(),
        password: zod.string()
      });

    if(!UserSchema.safeParse(req.body)){
        return res.status(401).json({
            message: "Invalid input"
        })
    }
    next()

}

userRouter.post('/login',validateUserLogin, async (req,res)=>{
    const user = await User.findOne({
        username: req.body.username
    })

    if(!user){
        return res.status(403).json({
            message: "User doesn't exist"
        }) 
    }
    else{
        if(user.password == req.body.password){
            const userId = req.body._id;
            const token = jwt.sign({
                userId
            }, JWT_SECRET);

            return res.status(200).json({
                message: "User logged in successfully",
                token: token,
                firstName: user.firstName,
                lastName: user.lastName
            }) 
        }
        
        return res.status(403).json({
            message: "Incorrect Email/Password"
        }) 

    }

    
    
})

function validateUserUpdate(req,res, next){
    const UserSchema = zod.object({
        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional()
      });

    if(!UserSchema.safeParse(req.body)){
        return res.status(401).json({
            message: "Invalid input"
        })
    }
    next()

}

userRouter.post('/update',authMiddleware, validateUserUpdate, async (req,res)=>{
    await User.updateOne({ _id: req.userId }, req.body);
	
    res.status(200).json({
        message: "Updated successfully"
    })

    
    
})

userRouter.get('/payto',authMiddleware, async (req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})


module.exports = {userRouter}