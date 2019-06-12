const { createInterface } = require('readline');
const { getIntInclusive } = require('./random');

/**
 *
 * @param {object} options
 * @param {number} options.min
 * @param {number} options.max
 */
// 2 - class
class Jeu {
  constructor(options = {}) {
    // 3 - default value
    // options = options || {};

    // 4 - destructurer un objet
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;
    const { min = 0, max = 100 } = options;

    this._rl = createInterface(process.stdin, process.stdout);
    this.entierAlea = getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      // 5 - Template literal
      console.log(`Vous avez déjà joué : ${this.essais.join(' | ')}...`);
    }

    this._rl.question('Quel est le nombre ?', (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

module.exports = Jeu;
