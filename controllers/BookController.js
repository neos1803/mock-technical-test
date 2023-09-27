const books = require('../models/data');

class BooksController {

    static async getAllBooks(req, res) {
      return res.status(200).json({
        message: "Okay",
        data: books
      })
    }
  
  }
  
  module.exports = BooksController;