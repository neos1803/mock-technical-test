const books = require('../models/data');

class BooksController {

    static async getAllBooks(req, res) {
      return res.status(200).json({
        message: "Success",
        data: books
      })
    }

    static async getBookById(req, res) {
        const bookId = req.params.id
        const book = books.find(({id}) => id == bookId)
        return res.status(200).json({
            message: "Success",
            data: book
        })
    }

    static async getBookByType(req, res) {
        const {jenis} = req.params
        const book = books.filter(({type}) => type.toLowerCase() == jenis.toLowerCase())
        return res.status(200).json({
            message: "Success",
            data: book
        })
    }

    static async addBook(req, res) {
        const {name, type} = req.body
        const book = {
            id: books.length + 1,
            name,
            type,
        }
        books.push(book)
        return res.status(200).json({
            message: "Success",
            data: books
        })
    }

    static async editBookById(req, res) {
        const bookId = req.params.id
        const theBook = books.findIndex(({id}) => id == bookId)
        const {name, type} = req.body
        books[theBook] = {
            ...books[theBook],
            name,
            type
        }
        return res.status(200).json({
            message: "Success",
            data: books
        })
    }

    static async deleteBookById(req, res) {
        const bookId = req.params.id
        const book = books.findIndex(({id}) => id == bookId)
        books.splice(book, 1)
        return res.status(200).json({
            message: "Success",
            data: books
        })
    }
  
  }
  
  module.exports = BooksController;