
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const objKeys = arr => {
  let keyList = Object.keys(arr);
  let keyListUpper = keyList.map(keysNorm => keysNorm.toUpperCase());
    console.log(keyListUpper);
};

console.log(obj);
objKeys(obj);
