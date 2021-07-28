
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  console.log(lengths);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengths(arr));

//I couldn't do this one on my own. More study is needed!