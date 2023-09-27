const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Import routes here
const exampleRoute = require("./routes/examples");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use your route here
app.use(exampleRoute);

// app.get('/', (req, res) => {
//   res.json('Okay lahhhhhhh')
// });

app.listen(
  port,
  () => {
    console.log(`Running on http://localhost:${port}`)
  }
);