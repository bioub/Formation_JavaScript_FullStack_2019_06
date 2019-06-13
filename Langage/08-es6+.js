// conversion liste de valeur <-> tableau

// REST (liste de valeur -> tableau)
function sum(a, b, ...n) {
  let result = a + b;

  result += n.reduce((acc, nb) => acc + nb, 0);
  // acc: 0, nb: 3 => return 3
  // acc: 3, nb: 4 => return 7
  // acc: 7, nb: 5 => return 12

  return result;
}

console.log(sum(1, 2, 3, 4, 5));

// SPREAD (liste de valeur <- tableau)
function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const nbs = [1, 2, 3, 4, 5];

console.log(sum2(...nbs));

// Destructurer un tableau
//    [1  , 2  , 3, 4   , 5   ]
const [one, two = 2,  , ...restNbs] = nbs;
console.log(one);

const clone = [0, ...nbs, 6];

// Destructurer un objet
const coords = {x: 10, y: 20};
//    { x: 10       , y: 20}
const { x: valX = 10, y = 20, ...otherKeys } = coords; // ex


// REST / SPREAD Object
const cloneCoords = {...coords, z: 30};
