const Bird = require("./bird.js");

let bird;
let birds = [];

bird = new Bird(1, "mus", "blauw");
birds.push(bird);
bird = new Bird(2, "kanarie", "geel");
birds.push(bird);
bird = new Bird(3, "mus", "blauw");
birds.push(bird);

for(let i = 0; i < birds.length; i++) {
  console.log(birds[i]);
}

function count() {
let count = 0;

for(let i = 0; i < birds.length; i++) {
  count++;
  console.log(count);
}
}

function findAll(birds) {

  let zoekvogel = prompt("wat is de vogel die u zoekt in het kooitje?", '');

    if (bird.name === zoekvogel) {
      alert("de " + zoekvogel + " zit in het kooitje");
    } else return error;
}

function findById(birds) {
  let zoekvogel = prompt("wat is de vogelId die u zoekt in het kooitje?", '');

    if (bird.id === zoekvogel) {
      console.log("de vogel zit in de kooi");
    } else return error;
}
