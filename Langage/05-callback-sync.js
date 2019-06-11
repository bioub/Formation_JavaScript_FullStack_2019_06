// Style de programmation : Paradigme
// - impérative
// - procédurale
function hello(name) {
    console.log('Hello ' + name);
}

const names = ['Jean', 'Eric', 'Romain'];

for (let i = 0; i < names.length; i++) {
    let elt = names[i];
    if (elt.length === 4) {
        elt = elt.toUpperCase();
        hello(elt);
    }
}

// - fonctionnel
names.filter((elt) => elt.length === 4)
     .map((elt) => elt.toUpperCase())
     .forEach(hello);

// pile d'appel
// ^
// |
// |                         log     log
// |=> - => - =>   => - =>   hello - hello  
// |filter       - map     - forEach
// +----------------------------------------> temps
// 
