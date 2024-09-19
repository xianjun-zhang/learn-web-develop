// Importing required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importing routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Creating express app
var app = express();

// Setting up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware setup
app.use(logger('dev')); // Logs HTTP requests in the development environment
app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded data (from forms) and puts it in req.body
app.use(cookieParser()); // Parses cookies attached to the client request and populates req.cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files (like images, CSS, JS) from the 'public' directory

// Routing setup
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catching 404 errors and forwarding to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handling
app.use(function(err, req, res, next) {
  // Setting locals for error handling
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Rendering error page
  res.status(err.status || 500);
  res.render('error');
});

// Exporting the app
module.exports = app;
