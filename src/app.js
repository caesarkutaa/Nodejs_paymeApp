require("dotenv").config();
const express = require("express");
const transaction = require('./routes/transaction')
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
// connect database
require("./DB/db").connect();

// routes
app.use("/api/v1/",transaction);
app.use((req, res, next) => {
  console.log('Request body:', req.body);
  next();
});

const port = process.env.PORT || 3023;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

