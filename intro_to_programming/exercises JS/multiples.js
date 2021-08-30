function find_multiples(integer, limit) {
    
    let multipleArray = [];
    
    let i = 1;
    
    while (integer < limit) {
        let multiple = integer * i;
        multipleArray.push(multiple);
        i++;
    }
    
    return multipleArray;
}

console.log(find_multiples(5, 25));

//HAVEN'T GOT IT TO WORK YET!