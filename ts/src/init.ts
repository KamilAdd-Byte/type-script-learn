import {PolishPizzeria} from "./polish-pizzeria";
import {AmericanPizzeria} from "./amerikan-pizzeria";


const laStrada = new PolishPizzeria('La Strada',true);
const americana = new PolishPizzeria('Americana', false);
const hawajska = new PolishPizzeria('Hawajska', true);
const diablo = new AmericanPizzeria('Diablo');

// laStrada.order('Hawajska');
// laStrada.manager = 'Mas'
// diablo.manager='Amerikan Psycho';

// wyświetlanie
console.log(laStrada,americana,hawajska,diablo);
