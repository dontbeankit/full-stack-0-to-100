const mongo = require("mongoose")
require('dotenv').config()


mongo.connect(process.env.mongo_url+"/procastinot");


const todoSchema = new mongo.Schema({
    title: String,
    description: String,
    done: Boolean
},timestamps=true)

const Todo = mongo.model('todos', todoSchema);

module.exports = { Todo }