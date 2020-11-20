

let week = [];

for (let i = 0; i < 7; i++) {
  const curr = new Date();
  const currTime = curr.getHours();
  let add;
  currTime > 19 ? add = 1 : add = 0;
  let next = new Date(curr.setDate(curr.getDate() + i + add));
  const options = {weekday: 'short', day: 'numeric', month: 'short'};
  week.push(next.toLocaleString('default', options).split(' '));
}

console.log(week);



// let timeArr = [];
// const curr = new Date();
// const currHour = curr.getHours();
// let add;
// currHour > 19 ? add = 1 : add = 0;
// let firstDay = new Date(curr.setDate(curr.getDate() + add));

// const dateString = firstDay.toDateString();
// const date = new Date(dateString);
// console.log(date.toString());
// let futureHour = 9;
// let i = 0;
// while (futureHour < 19) {
//   const futureDate = new Date(date.getTime() + (9 * 60 * 60000) + (30 * 60000) * i);

//   var amPm = new Date(futureDate);
//   var options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   };
//   var timeString = amPm.toLocaleString('en-US', options);
//   timeArr.push(timeString);

//   futureHour = futureDate.getHours();
//   i++;
// }
// console.log(timeArr);

