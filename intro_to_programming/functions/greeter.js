


const firstName = name => {
  let rlSync = require(`readline-sync`);
  let nameFirst = rlSync.question(`What's your first name?\n`);
  return nameFirst;
};

const lastName = name => {
  let rlSync = require(`readline-sync`);
  let nameLast = rlSync.question(`What's your last name?\n`);
  return nameLast;
};


console.log(`Hello, ${firstName()} ${lastName()}!`);