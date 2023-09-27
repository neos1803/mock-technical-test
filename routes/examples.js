const express = require('express');
const router = express.Router();

const ExampleController = require('../controllers/ExampleController');
const BooksController = require('../controllers/BookController');

router.get('/', ExampleController.index);
router.get('/books', BooksController.getAllBooks)
router.get('/books/:bookId', BooksController.getBookById)


module.exports = router;