const books = require('../models/data')

class bookController {

    static async getAllBook(req, res) {
        return res.status(200).json({
            message : 'Success get All Book',
            data : books
        });
    }

    static async getBookById(req, res) {

        return res.status(200).json({
            message: 'Success get Book By Id',
            data: books.req.params.id
        });
    }

    static async addBook (req, res) {
        const {name, type} = req.body
        const id = books.length + 1
        const newAddBook = {id, name, type}

        books.push(newAddBook)
        const bookSuccess = books.filter((n) => n.id === id).length > 0;

        if(bookSuccess)
        return res.status(201).json({
            message: 'Success Create New Book',
            data : books
        });
        return res.status('500').json({
            message: 'Failed add New Book'
          });
    }

    static async updateBook(req, res) {
        const id = req.params.id;
        const {name, type} = req.body
    
        const book = books.findIndex((i) => i.id === Number(id));
    
        if (book) {
          name = req.body.name,
          type = req.body.type
          return res.status(200).json({
            message: 'Success Update Book',
            data: books
          });
        }
        return res.status(500).json({
          message: 'Failed Update Buku',
        }); 
      }

      static async deleteBook(req, res) {
        const id = req.params.id;
    
    const book = books.findIndex((i) => i.id === Number(id));

    if (book !== -1) {
      books.splice(book, 1)
      return res.status(200).json({
        message: 'Success Delete Book',
        data: books,
      });
    }
    return res.status('404').json({
      message: 'Failed get Book',
    });
      }
}

module.exports = bookController