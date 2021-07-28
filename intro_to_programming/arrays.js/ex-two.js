 
 let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
 
 const myArrayEven = myArray.filter(num => num % 2 === 0);
 console.log(myArrayEven);
 
 //this method doesn't "log" to the console, so this is another way to do it to meet that need.
 
 console.log(myArrayEven.toString());
 
 //curious as to what other methods could be used to get desired outcome as the request is vague.
