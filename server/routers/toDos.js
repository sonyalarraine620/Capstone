const express = require('express');
const router = Router();
const toDo = require('../models/toDo')

//creating one
router.post('/', (request, response) => {
  const newToDo = new toDo(request.body);
  newToDo.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  })
})
//getting all
router.get('/', (request, response) => {

})
//getting one
router.get('/:id', (request, response) => {
     
})

//updating one
router.patch('/:id', (request, response) => {

}) 
//deleting one
router.delete('/:id', (request, response) => {

})

module.exports = router;