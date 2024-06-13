const zod = require("zod");

//define all the expected input types

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    done: zod.boolean()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {createTodo: createTodo, updateTodo: updateTodo}