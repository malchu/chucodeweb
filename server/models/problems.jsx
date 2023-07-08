const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    attempts: {
        type: String,
        required: true,
    },
})

const ProblemModel = mongoose.model("users", ProblemSchema)
module.exports = ProblemModel