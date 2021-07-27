
const evenOrOdd = num => {
  if (Number.isInteger(num)) {
  } else {
    console.log(`Error ${num} is not a valid entry. Please enter a valid integer.`)
    return;
  };
  
  if (num % 2 === 0) {
    console.log(`Your number is even`);
  } else {
    console.log(`Your number is odd`);
  }
};

evenOrOdd(10);
evenOrOdd(11);
evenOrOdd(3.14159);
