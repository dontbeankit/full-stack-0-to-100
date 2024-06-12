const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    //check for existing users
    User.create({
        username: username,
        password: password
    }).then((value)=>{
        if(value)
        res.json({msg:"Success"})
        else
        res.status(403).json({msg:"Error"})
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const getCourses = await Course.find({})
    if(getCourses)
        res.json({
            courses: getCourses
        })
    else
    res.status(403).json({msg:"Error"})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    
    try{
        const course = req.params.courseId
        const username = req.headers.username;
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: course
            }
        })
        res.json({
            message: "Purchase complete!"
        })
    } catch(e){
        res.status(403).json({e})
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({courses: courses})
});

module.exports = router