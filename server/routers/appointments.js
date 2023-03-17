const { Router } = require("express");
const appointment = require("../models/appointments");

const router = Router();

router.post("/", (request, response) => {
    const appointments = new appointment(request.body);
    appointment.save((error, record) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(record);
    });
});

router.get("/", (request, response) => {
    appointment.find({}, (error, record) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(record);
    });
});