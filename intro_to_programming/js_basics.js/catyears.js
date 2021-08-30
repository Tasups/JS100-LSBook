
function humanToCatYears (num) {
  let firstNum = num - 1;
  let secondNum = firstNum - 1;
  let result = secondNum * 4;
  
  if (num === 1) {
    console.log(`Your age in cat years is: 15`);
  } else if (num === 2) {
    console.log(`Your age in cat years is: 24`);
  } else {
    console.log(`Your age in cat years is: ${24 + result}`);
  }
}

humanToCatYears(15); //return 76