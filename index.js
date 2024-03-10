const express = require('express');
const  routes  = require('./routes/index');
const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});