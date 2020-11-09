const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require ('mongoose');
const connectingURL = 'mongodb+srv://petrus766hi:1234567890@backend.pfup9.mongodb.net/backend?retryWrites=true&w=majority';
const databaseName = 'Betta-Fish';

module.exports = function () {
  mongoose.connect (
    connectingURL,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true},
    (error, client) => {
      if (error) {
        return console.log ('DB TIDAK CONNECT');
      }
      console.log ('DB CONNECT');
    }
  );
};
