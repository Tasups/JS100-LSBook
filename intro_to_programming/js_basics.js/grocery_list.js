
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

const markOff = str => {
  let item = groceryList.indexOf(str);
  let markedOffResult = groceryList.splice(item, 1);
  return groceryList;
};

console.log(markOff('garlic'));