const mongoose = require("mongoose");

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



module.exports = {
  findOneById,
  insertOne
};