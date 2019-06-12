// conversion liste de valeur <-> tableau

// REST (liste de valeur -> tableau)
function sum(a, b, ...n) {
  let result = a + b;

  result += n.reduce((c, d) => c + d);

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
const [one, two = 3,  , ...restNbs] = nbs;
console.log(one);

// Destructurer un objet
const coords = {x: 10, y: 20};
//    { x: 10  , y: 20}
const { x = 10, y = 20 } = coords; // ex


