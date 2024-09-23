const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./models');

const app = express();

const localIP = "192.168.240.1";
const mongoDB = `mongodb://${localIP}:27017/express-auth`;

/**
       * TODO: Move this JWT secret to a .env file for better security
       * 
       * - The JWT secret is used to sign the token and should be kept confidential
       * - Storing it in an environment variable prevents accidental exposure in version control
       * - The fallback 'default-secret-key-if-env-not-set' is provided for development purposes
       * - In production, always ensure a proper secret is set in the environment variables
       * 
       * IMPORTANT: 
       * - Never use the default secret in a production environment
       * - It's crucial to set a strong, unique secret for each deployment
       */
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key-if-env-not-set-in-dev-mode';

/**
 * Authentication middleware function
 * 
 * This middleware function is used to authenticate requests using JWT tokens.
 * It checks for the presence of an Authorization header, verifies the token,
 * and attaches the user object to the request if authentication is successful.
 * 
 * Usage:
 * app.get('/protected-route', auth_middleware, (req, res) => {
 *   // Access authenticated user via req.user
 *   res.json({ message: `Hello, ${req.user.username}!` });
 * });
 */
const auth_middleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }

        const token_raw = req.headers.authorization.split(' ')[1];
        const token_decoded = jwt.verify(token_raw, JWT_SECRET);
        const user = await User.findById(token_decoded.userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        console.log("User authenticated:", user);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed',
            error: error.message
        });
    }
};




app.use(express.json());

async function connectToDatabase() {
    try {
        console.log("Connecting to MongoDB...");
        // Update the connection string if needed
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Add a timeout
        });
        console.log('Connected to MongoDB Successfully!');
    } catch (err) {
        console.error('ERROR: Could not connect to MongoDB. Error details: ', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}

async function startServer() {
  try {
    await connectToDatabase();

    // root path
    app.get('/', (req, res) => {
      res.send('Hello World. / path!');
    });

    // register path
    app.post('/api/register', async (req, res) => {
      try {
        const user = await User.create({ 
          username: req.body.username,
          password: req.body.password
        });
        res.status(201).json({
          message: 'User registered successfully',
          user: user
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error creating user',
          error: error.message
        });
      }
    });


    // get all users
    app.get('/api/users', async (req, res) => {
      const users = await User.find();
      console.log('Users retrieved:', users);
      res.send(users);
    });


    // login path
    app.post('/api/login', async (req, res) => {
      const user = await User.findOne({ 
        username: req.body.username 
      });

      if (!user) {
        return res.status(422).json({
          message: 'User not found',
        });
      }

      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: 'Incorrect password',
        });
      }

    
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);

      res.status(200).json({
        message: 'Login successful. Logged in user:',
        user: user,
        token: token
      });
    }); 


    // profile path
    app.get('/api/profile', auth_middleware, async (req, res) => {
      try {
        if (!req.user) {
          return res.status(404).json({
            message: 'User not found in profile path'
          });
        }

        res.status(200).json({
          message: 'Profile retrieved',
          user: req.user
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error retrieving profile',
          error: error.message
        });
      }
    });


    // start the server and listen on port 3001
    app.listen(3001, () => {
      console.log('Server running at http://localhost:3001');
    });
    
  } 
  catch (err) {
    console.error('Failed to start the server. Error details: ', err);
    process.exit(1);
  }
}

startServer();

module.exports = app;
