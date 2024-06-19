const zod = require("zod");

//define all the expected input types

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    _id: zod.string(),
    done: zod.boolean()
})

const zodcheckId = zod.object({
    _id: zod.string(),
    title: zod.string().optional(),
    description: zod.string().optional()
})

module.exports = {zodcreateTodo: createTodo, zodupdateTodo: updateTodo, zodcheckId}