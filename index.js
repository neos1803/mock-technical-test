const express = require('express');
const books = require('./models/data');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Import routes here
const exampleRoute = require("./routes/examples");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use your route here
app.use("/api/v1/example", exampleRoute);

app.get('/', (req, res) => {
  res.json('Okay')
});

// Menampilkan semua jenis buku
app.get('/books/', (req, res) => {
  return res.status(200).json({
    message: "Success",
    data: books
  })
})

// Menampilkan buku berdasarkan id
app.get('/books/:id', (req, res) => {
  return res.status(200).json({
    message: "Success",
    data: books[req.params.id]
  })
})


// Menampilkan buku berdasarkan jenis bukunya
app.get('/jenis/', (req, res, next) => {
  const filters = req.query;
  const filterJenis = books.filter(buku => {
    let isValid = true
    for (key in filters) {
      console.log(key, buku[key]), filters[key];
      isValid = isValid && buku[key] == filters[key];
    }
    return isValid;
  });
  return res.status(200).json({
    message: "Success",
    data: filterJenis
  })
})


// Mengubah nama buku
app.put('/books/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id
  books.filter(buku => {
    if (buku.id == id) {
      buku.id = id
      buku.name = req.body.name
      buku.type = req.body.type

      return buku;
    }
  })
  return res.status(200).json({
    message: "Success",
    data: books
  })
})

// Menambah buku baru
app.post('/books/', (req, res) => {
  return res.status(200).json({
    message: "Success",
    data: "Tambah Buku"
  })
})

// Menampilkan semua buku kecuali buku yang telah dihapus berdasarkan id
app.delete('/books/:id', (req, res) => {
  console.log(req.params);
  // const delete = req.params.id
  let id = +req.params.id
  let index = books.findIndex((buku) => buku.id === id)
  let deleteBook = books.splice(index, 1)
  res.send(deleteBook)
})

app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);