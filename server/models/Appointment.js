const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    }

});
 
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;