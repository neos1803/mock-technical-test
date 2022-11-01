const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// import routes here
const bookRouter = require("./routes/book.route");

app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// Use your route here
app.use("/books", bookRouter);

app.get('/', (req, res) => {
  res.json('Okay')
});

app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);