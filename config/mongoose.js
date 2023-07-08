const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://ppratiksharma2000:test_pwd@cluster0.d46hvsc.mongodb.net/placement?retryWrites=true&w=majority'
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in database connection!!!'));

db.once('open', () => {
  console.log('Connection to database is succesfull.');
});

module.exports = db;
