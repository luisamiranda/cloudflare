const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use(express.static(path.join(__dirname, '/public')))
  .get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')))
  .get('/public/page2.html', (req, res, next) => res.sendFile(path.join(__dirname, '/public/page2.html')))
  .use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  })
  .use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
  })
  .listen(5050, (req, res, next) => console.log("listening 5050"));
