const mongo = require("mongoose");

mongo.connect('mongodb+srv://ankitrath52:Ankitmaster72$@mern-app.vfwjbld.mongodb.net/akropay')

userSchema = new mongo.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongo.Schema({
    userID: {
        type: mongo.Schema.Types.ObjectId,
        required: true,
        ref: 'User'//refers to the User table's username, if user doesnt exist, cant add
    },
    balance: {
        type: Number,
        required: true
    }
})

// In the real world, you shouldn’t store `floats` for balances in the database.
// You usually store an integer which represents the INR value with 
// decimal places (for eg, if someone has 33.33 rs in their account, 
// you store 3333 in the database).

// There is a certain precision that you need to support (which for india is
// 2/4 decimal places) and this allows you to get rid of precision
// errors by storing integers in your DB

const User = mongo.model("User", userSchema)
const Account = mongo.model("Account", accountSchema)

module.exports = { User, Account }