const books = require('../models/data');

class BooksController {

    static async getAllBooks(req, res) {
      return res.status(200).json({
        message: "Success",
        data: books
      })
    }

    static async getBookById(req, res) {
        const {id} = req.params
        console.log(id);
        const book = books.find(({id}) => id == id)
        console.log(book);
        return res.status(200).json({
            message: "Success",
            data: book
        })
    }
  
  }
  
  module.exports = BooksController;