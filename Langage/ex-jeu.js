function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '));
  }

  rl.question('Quel est le nombre ?', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();


  });
}

jouer();

// pile d'appel
// ^
// |
// |             question     question
// |question     jouer        jouer
// |jouer    ... =>       ... =>
// +-------------------------------------------------------> temps
//
