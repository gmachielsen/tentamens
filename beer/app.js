const Beer = require("./beer.js");

class Repository {

  constructor() {
    this.beers = []
  }

  save(beer) {
    this.beers.push(beer);
  }
}
let beer;
let repository = new Repository();

beer = new Beer("Hoegaarden", 500);
repository.push(beer);
beer = new Beer("Heineken", 600);
repository.push(beer);
beer = new Beer("Grolsch", 500);
repository.push(beer);


function zoekbeer(beer) {
    if (beers.name === 'kersen') {
      return error;
    }
}
