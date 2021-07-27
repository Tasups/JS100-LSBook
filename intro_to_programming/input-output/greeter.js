
let rlSync = require(`readline-sync`);
let nameFirst = rlSync.question(`What's your first name?\n`);
let nameLast = rlSync.question(`What's your last name?\n`);
console.log(`Hello, ${nameFirst} ${nameLast}!`);
