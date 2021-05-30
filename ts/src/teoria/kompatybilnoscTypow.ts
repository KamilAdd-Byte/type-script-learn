interface Manager {
    name: string;
    lastName: string;
}
// @ts-ignore
let markTwain = {
    name: 'Mark',
    lastName: 'Twain',
    age: 56
};

function sayHello (person: Manager){
    return `Hello ,i am ${person.name}` + markTwain.name;
}

/**
 * @param person
  Kod wykona się, ponieważ wszystkie typy z Manager są zawarte w MarkuTwain (name i lastName)
 */

console.log(sayHello(markTwain));

 // @ts-ignore
let seyHello = (name: string) => 'Hello ' + name;
 console.log(seyHello("Kamil"));
