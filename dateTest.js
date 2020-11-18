
const curr = new Date();

let week = [];
let currTime = curr.getHours();

for (let i = 0; i < 7; i++) {
  const curr = new Date();
  const currTime = curr.getHours();
  let add;
  currTime > 19 ? add = 1 : add = 0;
  let next = new Date(curr.setDate(curr.getDate() + i + add));
  const options = {weekday: 'short', day: 'numeric', month: 'short'};
  week.push(next.toLocaleString('default', options).split(' '));
}