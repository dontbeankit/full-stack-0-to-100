const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.header.username;
    const password = req.header.password;
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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const course = req.params.courseId

    const username = req.header.username;
    const password = req.header.password;

    User.updateOne({
        username: username
    }, {
        purchasedCourses: {
            "$push": courseId
        }
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router