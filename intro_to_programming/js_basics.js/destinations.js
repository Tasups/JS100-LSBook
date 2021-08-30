
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
const contains = (str, array) => {
  for ( let i = 0; i < array.length; i ++) {
    if (array[i] === str) {
      return true;
    }
  } return false;
};

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

//STRONGLY CONSIDER REMEMBERING THAT THE POSITION OF FALSE IS QUITE IMPORTANT!!!!