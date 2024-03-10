const express = require('express');
const  routes  = require('./routes/index');
require('./db_connection/db.js');

const dotenv = require("dotenv");


const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});