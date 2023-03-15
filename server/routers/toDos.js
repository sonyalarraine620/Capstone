const {Router} = require('express');
const toDo = require('../models/toDo')
const router = Router();


//creating one
router.post("/", (request, response) => {
  const newToDo = new toDo(request.body);
  newToDo.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
//getting all
router.get("/", (request, response) => {
  toDo.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
//getting one
router.get('/:id', (request, response) => {
  toDo.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });   
});

//updating one
router.patch('/:id', (request, response) => {
  const body = request.body;
  toDo.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        title: body.title,
        summary: body.summary,
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if(error) return response.status(500).json(error);
      return response.json(record);

    }
  );
 }) 
//deleting one
router.delete('/:id', (request, response) => {
  toDo.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
  });

module.exports = router;