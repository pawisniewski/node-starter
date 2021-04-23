const fs = require('fs');

const genders = ['M','F'];
const maleNames = ['Jacob', 'Noah', 'Mason', 'William'];
const femaleNames = ['Emma', 'Sophia', 'Olivia', 'Isabella'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown'];

const randChoice = arr => ( 
  arr[Math.floor(Math.random() * arr.length)]
);

const people = [];

for (let i=0; i<20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;
  people.push({gender, firstName, lastName, age});
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) console.log('Something went wrong');
    console.log('File has been successfully generated!');
  });
