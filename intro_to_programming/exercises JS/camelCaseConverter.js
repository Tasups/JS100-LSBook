
function toCamelCase(str){
  //find letters after dashs and underscores and capitalize them
  const firstSearchTerm = '-';
  const secondSearchTerm ='_';
  
  for (let i = 0; i < str.length; i++);
  if (str.includes('-')) {
    const findDash = str.indexOf(firstSearchTerm);
    return findDash;
  } else if (str.includes('_')) {
    const findUnderscore = str.indexOf(secondSearchTerm);
    return findUnderscore;
  }
  
}

console.log(toCamelCase('find_me'));
