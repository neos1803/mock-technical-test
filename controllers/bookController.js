const books = require("../models/data");
const { bookValidate } = require("../utils/validate");

module.exports = {
  addBook: (req, res) => {
    const data = req.body;

    const { error } = bookValidate(data);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const id = books.some((b) => b.id === data.id);
    if (id) return res.status(409).send({ message: "Id number already exist" });

    const name = books.some((b) => b.name === data.name);
    if (name) return res.status(409).send({ message: "Title already exist" });

    books.push(data);
    res.status(201).send({ message: "Success", data: books });
  },

  getBooks: (req, res) => {
    if (books.length === 0)
      return res.status(404).send({ message: "Books data is empty" });

    res.status(201).send({ message: "Success", data: books });
  },

  getBookById: (req, res) => {
    const { id } = req.params;

    const data = books.find((b) => b.id === parseInt(id));
    if (!data) return res.status(404).send({ message: "Data not found" });

    console.log(data);

    res.status(201).send({ message: "Success", data: data });
  },

  getBookByType: (req, res) => {
    const { jenis } = req.params;

    const data = books.filter((b) => b.type === jenis);
    if (!data) return res.status(404).send({ message: "Data not found" });

    res.status(201).send({ message: "Success", data: data });
  },

  changeBookTitle: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const title = books.some((b) => b.name === name);
    if (title) return res.status(409).send({ message: "Title already exist" });

    console.log(title);

    const index = books.findIndex((b) => b.id === parseInt(id));
    if (index === -1)
      return res.status(404).send({ message: "Data not found" });

    books[index].name = name;
    res.status(200).send({ message: "Success", data: books });
  },

  deleteBookById: (req, res) => {
    const { id } = req.params;

    const data = books.find((b) => b.id === parseInt(id));
    if (!data) {
      return res.status(404).send({ message: "Data not found" });
    }

    const index = books.findIndex((b) => b.id === parseInt(id));
    if (index !== -1) {
      books.splice(index, 1);
      res.status(200).send({ message: "Success", data: books });
    }
  },
};
