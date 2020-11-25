const mongoose = require('mongoose');
const Property = require('./model');

mongoose.connect('mongodb://localhost/schedule', {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;

module.exports = db;