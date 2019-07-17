const Beer = require("./beer.js");

let beer;
let beers = [];

beer = new Beer("Hoegaarden", 500);
beers.push(beer);
beer = new Beer("Heineken", 600);
beers.push(beer);
beer = new Beer("Grolsch", 500);
beers.push(beer);

for(let i =0; i < beers.length; i++) {
  console.log(beers[i]);
}

function zoekbeer(beer) {
    if (beers.name === 'kersen') {
      return error;
    }
}

class Repository {

  constructor() {
    this.content = []
  }

  save(beer) {
    
  }

}
