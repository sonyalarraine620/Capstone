// const { Router } = require("express");
// const appointment = require("../models/appointments");

// const router = Router();

// router.post("/", (request, response) => {
//     const appointments = new appointment(request.body);
//     appointment.save((error, record) => {
//         if (error) return response.sendStatus(500).json(error);
//         return response.json(record);
//     });
// });

// router.get("/", (request, response) => {
//     appointment.find({}, (error, record) => {
//         if (error) return response.sendStatus(500).json(error);
//         return response.json(record);
//     });
// });

// router.get("/:id", (request, response) => {
//     appointments.findById(request.params.id, (error, record) => {
//         if (error) return response.sendStatus(500).json(error);
//         return response.json(record);
//     });
// });

// router.delete("/:id", (request, response) => {
//     const body = request.body;
//     appointments.findByIdAndUpdate(
//         request.params.id,
//         {
//             $set: {
//                 title: body.title,
//                 start: body.start,
//                 end: body.end,
//             }
//         },
//         {
//             new: true,
//             upsert: true
//         },
//     (error, record) => {
//         if (error) return response.sendStatus(500).json(error);
//         return response.json(record);
//     }
//     );
// });

// module.exports = router;