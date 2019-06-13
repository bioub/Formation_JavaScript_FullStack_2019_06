// 'use strict';

name = 'Romain';

function hello(n1, n2) {
  return 'Hello ' + n1 + ', ' + n2 + ' my name is ' + this.name;
  return `Hello ${n1}, ${n2} my name is ${this.name}`;
}

console.log(hello('Jean', 'Eric'));

const contact = { name: 'Paul' };

console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

/*
function bind(fn, that) {
  return function() {
    fn.call(that)
  }
}
*/

const helloContact = hello.bind(contact); //ES5
console.log(helloContact('Jean', 'Eric'));

