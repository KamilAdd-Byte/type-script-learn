import {PolishPizzeria} from "./polish-pizzeria";
import {AmericanPizzeria} from "./amerikan-pizzeria";
import {SizePizza, Status} from "./pizza.model";
import {GermanyPizzeria} from "./germany-pizzeria";

// tworzenie obiektów Pizzeria
const laStrada = new PolishPizzeria('La Strada',true);
const berlin = new GermanyPizzeria('Berlińska', false);
const hawajska = new PolishPizzeria('Hawajska', true);
const diablo = new AmericanPizzeria('Diablo');

// dodawanie pizz z wykorzystaniem interfejsów i enumów i metod
// 1 tworzenie obiektu pizza
const rzeznicka = {
    name: 'Rzeźnicka',
    price: 25,
    size: SizePizza.large,
    status: Status.Ordered
}
// operowanie na obiekcie Pizzeria. Dodanie pizzy do zamówienia
laStrada.order(rzeznicka);
laStrada.changeStatus(0,Status.Baked);




// wyświetlanie
console.log(laStrada,berlin,hawajska,diablo);

console.log(rzeznicka.name);
