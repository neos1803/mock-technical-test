const express = require('express');
const router = express.Router();


// Controller
const {add, all, remove, getById, getByType, update} = require('../controllers/controllers')

router
  .get('/', all)

  .get('/:id', getById)

  .get('/jenis/:type', getByType)

  .post('/', add)

  .put('/:id', update)

  .delete('/:id', remove)


module.exports = router;