const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')

//getting all
router.get('/', (request, response) => {

})
//getting one
router.get('/:id', (request, response) => {
     
})
//creating one
router.post('/', (request, response) => {

})
//updating one
router.patch('/:id', (request, response) => {

}) 
//deleting one
router.delete('/:id', (request, response) => {

})

module.exports = mongoose.model('Todo', toDoSchema);