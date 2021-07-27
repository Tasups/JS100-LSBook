
const numberRange = num => {
  if (num > 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`)
  } else if (num > 50 && num <= 100) {
    console.log(`${num} is between 51 and 100`)
  } else if (num > 100) {
    console.log(`${num} is greater than 100`)
  } else if (num < 0) {
    console.log(`${num} is less than 0`)
  }
};

numberRange(10);
numberRange(55);
numberRange(103);
numberRange(-5);