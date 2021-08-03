
function repeat(num, str) {
  let repeatStr = `${str}` * 3;
  return repeatStr;
}

//console.log(repeat(3, 'hi'));

function realRepeat (num, str) {
  let count = 0;
  let repeatString = [];
  while (count < 3) {
    repeatString.push(str);
    count += 1;
  }
  return repeatString.join("");
}

console.log(realRepeat(3, 'hi'));

