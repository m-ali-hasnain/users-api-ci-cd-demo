require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const { userRouter } = require('./routes');

const app = express();

// App level middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connecting to the database
connectDB();

// Adding routes
app.use('/users', userRouter);

// Listening to the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT);
});

module.exports = app; // Exporting the app object for testing purposes
