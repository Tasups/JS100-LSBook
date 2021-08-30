

const squareEveryDigit = num => {
  
  let myArr = String(num).split("").map((num)=>{
  return Number(num);
  })

  let sqArray = [];

  for (let i = 0; i < myArr.length; i++) {
    sqArray.push(Math.pow(myArr[i], 2));
  }
 
  
  let final = sqArray.join('');
  let finalNum = parseInt(final, 10);
  
 console.log(finalNum);
 console.log(typeof finalNum);
}

squareEveryDigit(3212);

