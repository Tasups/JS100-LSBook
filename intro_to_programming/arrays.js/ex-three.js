
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

const myArrayEvenOne = myArray[0].filter(num => num % 2 === 0);
const myArrayEvenTwo = myArray[1].filter(num => num % 2 === 0);
const myArrayEvenThree = myArray[2].filter(num => num % 2 === 0);

 console.log(`${myArrayEvenOne},${myArrayEvenTwo},${myArrayEvenThree}`);