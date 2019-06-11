/**
 * Fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message de salutation
 */
function hello(name) {
    return 'Hello ' + name.toUpperCase();
}

const names = ['Jean', 'Eric'];

for (let i = 0; i < names.length; i++) {
    const elt = names[i];
    console.log(hello(elt));   
}