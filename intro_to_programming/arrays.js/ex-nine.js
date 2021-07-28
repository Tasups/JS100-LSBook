
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const checkForThree = arr => {
  let result = arr.includes(3);
  console.log(result);
}

checkForThree(numbers1);
checkForThree(numbers2);
checkForThree(numbers3);