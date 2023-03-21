const { Router } = require("express");
const Appointment = require("../models/Appointment");

const router = Router();

router.post("/", (request, response) => {
    const appointment = new Appointment(request.body);
    appointment.save((error, record) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(record);
    });
});

router.get("/", (request, response) => {
    Appointment.find({}, (error, record) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(record);
    });
});

router.get("/:id", (request, response) => {
    Appointments.findById(request.params.id, (error, record) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(record);
    });
});

router.delete('/:id', (request, response) => {
    toDo.findByIdAndRemove(request.params.id, {}, (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    });
    });


module.exports = router;