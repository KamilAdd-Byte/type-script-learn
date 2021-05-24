"use strict";
var markTwain = {
    name: 'Mark',
    lastName: 'Twain',
    age: 56
};
function sayHello(person) {
    return 'Hello ,i am ${person.name}' + markTwain.name;
}
/**
 * @param person
  Kod wykona się, ponieważ wszystkie typy z Manager są zawarte w MarkuTwain (name i lastName)
 */
console.log(sayHello(markTwain));
var seyHello = function (name) { return 'Hello ' + name; };
console.log(seyHello("Kamil"));
