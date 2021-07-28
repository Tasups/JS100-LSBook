
let myArray = [ 1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0 ];

const evenOrOdd = myArray.map(obj => {
  if (obj % 2 === 0) {
    return "even";
  } else  {
    return "odd";
  }
});

console.log(evenOrOdd);

//Got it after looking at MDN documentation, specifically "Using Map to Reformat Objects in an Array"
//Could consider rewriting it using a for loop.