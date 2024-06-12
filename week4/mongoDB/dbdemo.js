const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    email: String,
    purchasedCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

const CourseSchema = new mongoose.Schema({
    title: String,
    price: 999
})

const User2Schema = new mongoose.Schema({
    email: String,
    password: String
})

const User = mongoose.model("User", User2Schema);
