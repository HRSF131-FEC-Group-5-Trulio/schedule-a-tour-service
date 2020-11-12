const fs = require('fs');
const faker = require('faker');


//Seeding is just a complicated for loop
//Lets look at approach one seeding to a file iteration
const images = ['https://s3-us-west-1.amazonaws.com/demo.fec.schedule/Scrum_process.jpg']
const prices = [10, 20, 30];
// Faker test
// let city = faker.image.city();
// console.log(city)


function createRecord(images, prices, id) {
  let dataStr = '';
  dataStr += `${id}`;
  dataStr += ` ${Math.floor(Math.random() * 10)}`
  dataStr += ` ${images[id % 2]}`;
  dataStr += ` ${prices[id % 3]}`;
  dataStr += ` ${faker.image.avatar()}`
  dataStr += `\n`;

  return dataStr;
}

function seedData(entries) {
  let created = 1;
  let fileText = '';
  while (created <= entries) {
    fileText += createRecord(images, prices, created);
    created++;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('data.txt', fileText, (err, data) => {
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