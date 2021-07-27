
function doubler(number) {
  console.log(number);

  if (number <= 1000) {
    doubler(number * 2);
  }
}

doubler(1); // => 5
            // => 10
            // => 20
            // => 40
            // => 80