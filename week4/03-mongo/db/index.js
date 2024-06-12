const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ankitrath52:Ankitmaster72$@mern-app.vfwjbld.mongodb.net/courses_w4');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    createdCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }


});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    //sample output from readme:
    //{ id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
},{timestamps: true});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

