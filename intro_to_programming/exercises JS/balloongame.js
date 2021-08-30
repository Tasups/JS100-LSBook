class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}

// Write function below
//assign count of balloons to each player
//calculate number of hits
//subtract number of hits from balloon count for OTHER player
//see which is bigger
//show that the one that has more balloons left at the end is the winner
const balloonAttack = (p1, p2) => {
  if (p1.hitsPerMinute > p2.hitsPerMinute) {
    return `${p1.name} is the winner!`;
  } else if (p1.hitsPerMinute < p2.hitsPerMinute) {
    return `${p2.name} is the winner!`;
  } else if (p1.hitsPerMinute === p2.hitsPerMinute) {
    return 'Tie';
  }
};

const player1 = new Player ("Bob Skinner", 11);
const player2 = new Player ("Jack", 11);


console.log(balloonAttack(player1, player2));