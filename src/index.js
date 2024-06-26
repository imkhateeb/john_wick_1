const express = require('express');
const app = express();
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  res.send('Hello World');
});

// Handling Global Errors
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})