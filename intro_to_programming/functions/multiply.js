
  const multiply = () => {
    let rlSync = require(`readline-sync`);
    const numFirst = rlSync.question(`Enter the first number\n`);
    const numSecond = rlSync.question(`Enter the second number\n`);
    const result = numFirst * numSecond;
    console.log(`${numFirst} * ${numSecond} = ${result}`);
  };
  
  multiply();
  