const express = require('express');
const app = express();
const router = require('./routes.js');

require('dotenv').config();

const { PORT = 3001 } = process.env;
app.use(require('./middlewares.js'));
app.use(router);

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});
