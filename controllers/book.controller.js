let books = require('../models/data')

// controller untuk endpoint /books
async function getBooks(req, res, next) {
    try {
        res.status(200).json({
            'message': 'Success',
            'data': books,
        });
    } catch (err) {
        console.error(`Error while getting books`, err.message);
        next(err);
    }
}

// controller untuk endpoint /books/:id
async function getBook(req, res, next) {
    try {
        res.status(200).json({
            'message': 'Success',
            'data': books.filter(book => book.id === parseInt(req.params['id']))[0],
        });
    } catch (err) {
        console.error(`Error while getting book`, err.message);
        next(err);
    }
}

// controller untuk endpoint /books/jenis/:jenis
async function getKindOfBook(req, res, next) {
    try {
        const kind = req.params['jenis'].toLowerCase();

        res.status(200).json({
            'message': 'Success',
            'data': books.filter(book => book.type.toLowerCase() === kind),
        });
    } catch (err) {
        console.error(`Error while get book by jenis`, err.message);
        next(err);
    }
}

// controller untuk endpoint POST /books
async function create(req, res, next) {
    try {
        const payload = req.body;
        const lastBook = books[books.length - 1];

        const book = {
            'id': ++lastBook.id,
            'name': payload.name,
            'type': payload.type,
        };

        books.push(book);

        res.status(200).json({
            'message': 'Success',
            'data': book,
        });
    } catch (err) {
        console.error(`Error while creating book`, err.message);
        next(err);
    }
}

// controller untuk endpoint PUT /books/:id
async function update(req, res, next) {
    try {
        const id = parseInt(req.params['id']);
        const payload = req.body;

        const filterId = books.findIndex(book => book.id === id);
        const book = {
            'id': id,
            'name': payload.name,
            'type': payload.type,
        };

        books[filterId] = book;
        res.status(200).json({
            'message': 'Success',
            'data': book,
        });
    } catch (err) {
        console.error(`Error while updating book`, err.message);
        next(err);
    }
}

// controller untuk endpoint DELETE /books/:id
async function remove(req, res, next) {
    try {
        const id = parseInt(req.params['id']);
        const book = books[id-1];
        books = books.filter(book => book.id !== id);

        res.status(200).json({
            'message': 'Success',
            'data': book,
        });
    } catch (err) {
        console.error(`Error while deleting book`, err.message);
        next(err);
    }
}

module.exports = {
    getBooks,
    getBook,
    getKindOfBook,
    create,
    update,
    remove,
};