const toCaps = str => {
  if (str.length > 10){
    return str.toUpperCase();
  } else {
    return str;
  }
};

console.log(toCaps(`Hello World!`));
console.log(toCaps(`goodbye!`));
