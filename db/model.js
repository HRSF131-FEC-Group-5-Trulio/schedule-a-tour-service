const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schedule', {useUnifiedTopology: true, useNewUrlParser: true});

const connectDb = mongoose.connection;

connectDb.on('error', console.error.bind(console, 'connection error:'));
connectDb.once('open', function() {
  console.log('Welcome to MongoDB!');
});

const propertySchema = new mongoose.Schema({
  id: Number, //property id
  scheduleATour: Array, //schedules belong to this property
});

const Property = mongoose.model('Property', propertySchema);

// findAll retrieves all schedule
const findAll = (callback) => {
  Property.find({}).exec(callback);
}

// _findOneById will retrieve the carousel associated with the given id
const findOneById = (id, callback) => {
  Property.findOne({"id": id}, callback);
}

// insertOne inserts a carousel into the db
const insertOne = (tour, callback) => {
  Property.create(tour, callback);
}

const insertMany = (tour, callback) => {
  Property.insertMany(tour, callback);
}

module.exports = {
  connectDb,
  findAll,
  findOneById,
  insertOne,
  insertMany,
};