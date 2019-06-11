const random = {
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const readline = require('readline');

/**
 *
 * @param {object} options
 * @param {number} options.min
 * @param {number} options.max
 */
function Jeu(options) {
  options = options || {};
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;
  this._rl = readline.createInterface(process.stdin, process.stdout);
  this.entierAlea = random.getIntInclusive(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' | '));
  }

  this._rl.question('Quel est le nombre ?', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();


  });
};

const game = new Jeu();

game.jouer();

// pile d'appel
// ^
// |
// |             question     question
// |question     jouer        jouer
// |jouer    ... =>       ... =>
// +-------------------------------------------------------> temps
//
