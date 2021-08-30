
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  movieTime() {
    if (this.data / this.users >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

let doNotGetOn = new Network(50, 9);
let getOn = new Network(100, 3);

console.log(doNotGetOn.movieTime());
console.log(getOn.movieTime());
