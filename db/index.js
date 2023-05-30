const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database successfully.');
  } catch (err) {
    console.log(
      'Error while connecting to database.\nExiting with error:',
      err.message
    );
    process.exit(0);
  }
};

module.exports = connectDB;
