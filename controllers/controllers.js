const books = require('../models/data')

class controllers {
  /**
   * Get All Books
   * @param {*} req 
   * @param {*} res 
   * @returns All Books
   */
  static async all(req, res) {
    return res.status('200').json({
      mesage: 'Succes',
      data: books
    });
  }

  /**
   * Get book by is
   * @param {id} req param
   * @param {*} res book by id
   * @returns book by id
   */
  static async getById(req, res) {
    const id = await req.params.id;
    const book = books.filter((n) => n.id === Number(id))[0];

    if (book !== undefined)
      return res.status('200').json({
        message: 'OK',
        data: book,
      });
    return res.status('404').json({
      response: 'Not Found!',
      message: 'Buku tidak di temukan!',
     });
  }

  /**
   * Get all books by type
   * @param {type} req param
   * @param {*} res book by type
   * @returns all books by type
   */
  static async getByType(req, res) {
    const type = req.params.type
    const book = books.filter((n) => n.type.toLowerCase().includes(type.toLowerCase()));
    if (book !== undefined)
      return res.status('200').json({
        message: 'Success',
        data: book,
      });
    return res.status('404').json({
      response: 'Not Found!',
      message: 'Buku tidak di temukan!',
     });
  }

  /**
   * Add new books
   * @param {type, name} req body
   * @param {*} res all books
   * @returns all books with new books
   */
  static async add(req, res) {
    const { name, type } = req.body;
    const id = books.length + 1
    const newBook = {id, name, type}

    books.push(newBook)
    const isSucces = books.filter((n) => n.id === id).length > 0;
    
    if(isSucces)
      return res.status('201').json({
        message: 'Succes',
        data: books
      });
    return res.status('500').json({
      response: 'Internal Server Error',
      message: 'Upload buku gagal!'
    });
  }

  /**
   * Update books by Id
   * @param {id, name, type} req param, body
   * @param {*} res books
   * @returns books with updated
   */
  static async update(req, res) {
    const id = req.params.id;
    let {name, type} = req.body
    console.log(name);
    console.log(type);

    const index = books.findIndex((i) => i.id === Number(id));
    if (name === undefined) name = books[index].name
    if (type === undefined) type = books[index].type
     
    console.log(name);
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,
        type
      };
      return res.status('200').json({
        message: 'Success',
        data: books
      });
    }
    return res.status('500').json({
      response: 'Internal Server Error',
      message: 'Gagal memperbaharui buku!',
    }); 
  }

  /**
   * delete books by id
   * @param {id} req param
   * @param {*} res books
   * @returns books
   */
  static async remove(req, res) {
    const id = req.params.id;
    
    const index = books.findIndex((i) => i.id === Number(id));

    if (index !== -1) {
      books.splice(index, 1)
      return res.status('200').json({
        message: 'success',
        data: books,
      });
    }
    return res.status('404').json({
      response: 'Not Found!',
      message: 'Buku tidak di temukan',
    });
  }
}

module.exports = controllers;