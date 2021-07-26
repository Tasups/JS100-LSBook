const num = 4936;

const  onesPlace = num % 10;
console.log(`The number in the one's place is: ${onesPlace}`);
const stepTwo = num - onesPlace;

const tensPlace = (stepTwo % 100) / 10;
console.log(`The number in the ten's place is: ${tensPlace}`);
const stepThree = num - ((tensPlace * 10) + onesPlace);

const hundredsPlace = (stepThree % 1000) / 100;
console.log(`The number in the hundred's place is: ${hundredsPlace}`);
const stepFour = num - (onesPlace + (tensPlace * 10) + (hundredsPlace * 100));

const thousandsPlace = (stepFour % 10000) / 1000;
console.log(`The number in the thousand's place is: ${thousandsPlace}`);

