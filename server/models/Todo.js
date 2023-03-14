const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    dateCreated : {
        type: Date,
        required: true,
        default: Date.now
    }
    })

    const Todo = mongoose.model('Todo', toDoSchema);

    module.exports = Todo