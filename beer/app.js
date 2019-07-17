const Beer = require("./beer.js");

class Repository {

  constructor() {
    this.beers = []
  }

  save(beer) {
    this.beers.push(beer);
  }
  findall() {
    return this.beers;
  }
}
let beer;
let repository = new Repository();

beer = new Beer("Hoegaarden", 500);
repository.save(beer);
beer = new Beer("Heineken", 600);
repository.save(beer);
beer = new Beer("Grolsch", 500);
repository.save(beer);


for(let beer of repository.findall()) {
  console.log(beer);
}
