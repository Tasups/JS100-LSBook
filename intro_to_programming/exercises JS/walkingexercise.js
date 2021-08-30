
function isValidWalk(walk) {
  
  if (walk.length != 10) {
    return false;
  }
  
  let stepNorth = 0;
  let stepSouth = 0;
  let stepEast = 0;
  let stepWest = 0;
  
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      stepNorth++;
      //return stepNorth++;
    } else if (walk[i] === 's') {
      stepSouth++;
      //return stepSouth++;
    } else if (walk[i] === 'e') {
      stepEast++;
      //return stepEast++;
    } else if (walk[i] === 'w') {
      stepWest++;
      //return stepWest++;
    }
  }
  
  if (stepNorth === stepSouth && stepEast === stepWest) {
    return true;
  } else {
    return false;
  }
  
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));