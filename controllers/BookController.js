const books = require('../models/data');


class BooksController {
  static async getAllBooks(req, res) {
    try {
      return res.status(200).json({
        message: 'Success',
        data: books,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }

  static async getBookById(req, res) {
    try {
      const bookId = req.params.id;
      const book = books.find(({id}) => id == bookId);
      if (!book) {
        return res.status(200).json({
          message: 'Book Not Found!',
          data: book,
        });
      }
      return res.status(200).json({
        message: 'Success',
        data: book,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }

  static async getBookByType(req, res) {
    try {
      const {jenis} = req.params;
      const book = books.filter(({type}) => type.toLowerCase() == jenis.toLowerCase());
      return res.status(200).json({
        message: 'Success',
        data: book,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }

  static async addBook(req, res) {
    try {
      const {name, type} = req.body;
      const book = {
        id: books.length + 1,
        name,
        type,
      };
      books.push(book);
      return res.status(200).json({
        message: 'Success',
        data: books,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }

  static async editBookById(req, res) {
    try {
      const bookId = req.params.id;
      const theBook = books.findIndex(({id}) => id == bookId);
      const {name, type} = req.body;
      books[theBook] = {
        ...books[theBook],
        name,
        type,
      };
      return res.status(200).json({
        message: 'Success',
        data: books,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }

  static async deleteBookById(req, res) {
    try {
      const bookId = req.params.id;
      const book = books.findIndex(({id}) => id == bookId);
      books.splice(book, 1);
      return res.status(200).json({
        message: 'Success',
        data: books,
      });
    } catch (error) {
      const errResponse = {
        status_response: false,
        message: error.message,
        errors: error,
        data: null,
      };
      res.status(500).send(errResponse);
    }
  }
}

module.exports = BooksController;
