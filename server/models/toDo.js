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
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    priority: {
        type: String
    }
    })

    const toDo = mongoose.model('toDo', toDoSchema);
    //user Id implementation/pin

    module.exports = toDo;
