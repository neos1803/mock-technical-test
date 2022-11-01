const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.get('/jenis/:jenis', bookController.getKindOfBook);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.remove);

module.exports = router;