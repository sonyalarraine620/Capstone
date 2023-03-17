const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    }

});

const appointment = mongoose.model("appointment", appointmentSchema);

modeul.exports = appointment;