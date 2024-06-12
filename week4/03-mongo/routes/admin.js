const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.header.username;
    const password = req.header.password;

    //check for existing users
    Admin.create({
        username: username,
        password: password
    }).then((value)=>{
        if(value)
        res.json({msg:"Success"})
        else
        res.status(403).json({msg:"Error"})
    })
    
        
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    if(newCourse)
    res.json({msg:"Succes, ID:"+newCourse._id})
    else
    res.status(403).json({msg:"Error"})
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const getCourses = await Course.find({})
    if(getCourses)
        res.json({
            courses: getCourses
        })
    else
    res.status(403).json({msg:"Error"})
});

module.exports = router;