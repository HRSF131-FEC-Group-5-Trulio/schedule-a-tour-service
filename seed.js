const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./db/model');

db.connectDb.on('error', console.error.bind(console, 'connection error:'));
db.connectDb.once('open', function() {
  console.log('Welcome to MongoDB!');
});

const createProperty = (schedule) => {
  let property = {};
  property.id = Math.floor(Math.random() * 10);
  property.scheduleATour = [schedule];
  return property;
};

const createSchedule = () => {
  let schedule = {};
  schedule.name = faker.name.findName();
  schedule.phoneNumber = faker.phone.phoneNumber();
  schedule.email = faker.internet.email();

  const curr = new Date();
  const randomWeekDay = Math.floor(Math.random() * 6);
  const date = new Date(curr.setDate(curr.getDate() + randomWeekDay));
  schedule.date = date.toDateString();

  const randHour = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'][Math.floor(Math.random() * 11)];

  let randHalfHour = '';
  if (randHour === '19') {
    randHalfHour = '00';
  } else {
    randHalfHour = ['00', '30'][Math.floor(Math.random() * 2)];
  }

  schedule.time = `${randHour}:${randHalfHour}:00`;
  const boolean = [true, false];
  schedule.inPerson = boolean[Math.floor(Math.random() * 2)];
  schedule.financing = boolean[Math.floor(Math.random() * 2)];
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
    db.insertMany(properties, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

seedData(30)
  .then(() => { console.log('Wasn\'t that easy'); })
  .catch((err) => { console.log('Misdirect the student\'s quickly', err); })
  .then(() => { db.connectDb.close(); });
