const express = require('express');
const router = express.Router();

const ExampleController = require('../controllers/ExampleController');
const BooksController = require('../controllers/BookController');

router.get('/', ExampleController.index);
router.get('/books', BooksController.getAllBooks)
router.get('/books/:id', BooksController.getBookById)
router.get('/books/jenis/:jenis', BooksController.getBookByType)
router.post('/books', BooksController.addBook)
router.put('/books/:id', BooksController.editBookById)
router.delete('/books/:id', BooksController.deleteBookById)


module.exports = router;