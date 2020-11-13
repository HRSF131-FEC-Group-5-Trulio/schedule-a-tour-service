const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/schedule', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to MongoDB!')
});

const schedules = [];

const scheduleSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  createdAt: Date,
  inPerson: Boolean,
  financing: Boolean
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

function createRecord() {
  let schedule = {};
  schedule.name = faker.name.findName();
  schedule.phoneNumber = faker.phone.phoneNumber();
  schedule.email = faker.internet.email();
  schedule.createdAt = new Date();
  schedule.inPerson = Math.floor(Math.random() * 2);
  schedule.financing = Math.floor(Math.random() * 2);
  return schedule;
}

function seedData(entries) {
  let created = 1;
  while (created <= entries) {
    schedules.push(createRecord());
    created++;
  }

  return new Promise((resolve, reject) => {
    Schedule.insertMany(schedules, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

seedData(10)
  .then(() => { console.log("Wasn't that easy") })
  .catch(() => { console.log("Misdirect the student's quickly") })