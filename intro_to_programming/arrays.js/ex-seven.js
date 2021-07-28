
let array = [3, 5, 7];

function sumOfSquares (arr) {const arraySquared = array.map(x => x * x);
const result = arraySquared.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(result);
}

sumOfSquares(array);


//This was VERY HARD for me to grok. Felt like my head was hurting. Got it through looking at MDN, though.
