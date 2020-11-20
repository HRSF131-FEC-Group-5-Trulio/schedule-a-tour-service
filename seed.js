const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/schedule', {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to MongoDB!');
});
// id = this.location.pathname.slice(-10) way to get id from url
const propertySchema = new mongoose.Schema({
  id: Number, //property id
  scheduleATour: Array, //schedules belong to this property
});

const Property = mongoose.model('Property', propertySchema);


const createProperty = (schedule) => {
  let property = {};

  // array of sample property id
  const idArr = [2083614416, 2083994500, 2084022308, 2083617535, 2084019872];
  property.id = idArr[Math.floor(Math.random() * 5)];
  property.scheduleATour = [schedule];
  return property;
};

const createSchedule = () => {
  let schedule = {};
  schedule.name = faker.name.findName();
  schedule.phoneNumber = faker.phone.phoneNumber();
  schedule.email = faker.internet.email();
  const date = new Date();
  schedule.date = date.toDateString();
  schedule.time = date.toTimeString();
  schedule.inPerson = Math.floor(Math.random() * 2);
  schedule.financing = Math.floor(Math.random() * 2);
  return schedule;
};

const seedData = (entries) => {
  let created = 1;
  let properties = [];
  while (created <= entries) {
    const schedule = createSchedule();
    const property = createProperty(schedule);
    let added = false;

    // iterate seed properties to find existed schedule at same properties
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].id === property.id) {
        properties[i].scheduleATour.push(property.scheduleATour[0]);
        added = true;
      }
    }
    if (!added) {
      properties.push(property);
    }
    created++;
  }

  return new Promise((resolve, reject) => {
    Property.insertMany(properties, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

seedData(10)
  .then(() => { console.log('Wasn\'t that easy'); })
  .catch(() => { console.log('Misdirect the student\'s quickly'); });