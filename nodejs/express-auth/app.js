const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require('./models');

app.get('/', (req, res) => {
  res.send('Hello World. / path!');
});

app.post('/api/register', async (req, res) => {
  res.send('Hello World. /api/register path!');
});

app.post('/api/login', async (req, res) => {
  res.send('Hello World. /api/login path!');
});

app.listen(3001, () => {
  console.log('http://localhost:3001');
});

module.exports = app;
