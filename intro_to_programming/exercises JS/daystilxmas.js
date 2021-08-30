
function daysTilXmas (day, mon, year) {
  
  let count = 0;
  let countPool = 0;
  let month = mon.toLowercase();
  
  if (month === "january") {
    count = 334;
    countPool = 31 - day;
    return count;
    return countPool;
    //can I return two things in one statement?
  } else if (month === 'february') {
    count = 306;
    return count;
    //return countPool;
  } else if (month === 'march') {
    count = 275;
    countPool = 31 - day;
    return count;
    //return countPool;
  } else if (month === 'april') {
    count = 245;
    return count;
  } else if (month === 'may') {
    count = 211;
    countPool = 31 - day;
    return count;
  } else if (month === 'june') {
    count = 181;
    return count;
  } else if (month === 'july') {
    count = 150;
    countPool = 31 - day;
    return count;
  } else if (month === 'august') {
    count = 119;
    countPool = 31 - day;
    return count;
  } else if (month === 'september') {
    count = 89;
    return count;
  } else if (month === 'october') {
    count = 58;
    countPool = 31 - day;
    return count;
  } else if (month === 'november') {
    count = 28;
    return count;
  } else if (month === 'december') {
    count = -3;
    countPool = 31 - day;
    return count;
  }
  
  let totaldays = count + countPool;
  
  //need to factor in leap years!!!!!
  
  console.log(totaldays);
  
}

