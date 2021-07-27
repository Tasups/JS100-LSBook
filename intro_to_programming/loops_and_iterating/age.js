

let rlSync = require(`readline-sync`);
let currentAge = Number(rlSync.question(`What's your current age?\n`));

const postedAge = currentAge => {
  let advanceAge = 10;
  for (currentAge; currentAge <= 100; advanceAge ++) {
    console.log(`In ${advanceAge} years your age will be ${currentAge}`)
  }
};
