const express = require('express');
const router = express.Router();


const { getAllBook, getBookById, getBookByType, addBook, updateBook, deleteBook} = require('../controllers/bookController')

router.get('/books', getAllBook)
router.get('/books/:id', getBookById)
// router.get('/books/jenis/:type', getBookByType)
router.post('/books', addBook),
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)


module.exports = router;
