
function likeList (arr) {
  if (arr.length === 1) {
    console.log(`${arr[0]} likes this.`)
  } else if (arr.length === 2) {
    console.log(`${arr[0]} and ${arr[1]} like this.`)
  } else if (arr.length === 3) {
    console.log(`${arr[0]}, ${arr[1]}, and ${arr[2]} like this.`)
  } else if (arr.length > 3) {
    console.log(`${arr[0]} and ${arr[1]}, and ${arr.length - 2} others like this.`)
  } else {
    console.log(`No one likes this.`)
  }
}

likeList([]);
likeList(['Phoebe']);
likeList(['Phoebe', 'Joey']);
likeList(['Phoebe', 'Joey', 'Chandler']);
likeList(['Phoebe', 'Joey', 'Chandler', 'Rachel']);

//WORKS HERE BUT, FOR SOME REASON WON'T ON CODEWARS' KATA