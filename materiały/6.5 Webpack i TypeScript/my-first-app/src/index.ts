import { PolishPizzeria, AmericanPizzeria, Pizza, Status, Size } from './pizzerias';

const laStrada = new PolishPizzeria('La Strada', true);
const americanHouse = new AmericanPizzeria('American House');
const venezia = new PolishPizzeria('Venezia', true);

const isOvenInVeneziaFull = venezia.isOvenFull();

const capriciosa = {
    name: 'Capriciosa',
    price: '21.00zł',
    size: 'large',
    status: Status.Ordered,
    cancelable: true
};

const prosciutto = {
    name: 'Prosciutto',
    price: '28.20zł',
    size: 'small',
    status: Status.Baked,
    cancelable: true
};

venezia.order(capriciosa);
venezia.order(prosciutto);

const table = document.getElementById('table');

const createTrNode = (pizza: Pizza) => {
    return `
        <tr>
            <td>${pizza.name}</td>
            <td>${pizza.price}</td>
            <td>${pizza.size}</td>
        </tr>
    `
}

const getRowsWithOrderedPizzas = (pizzeria: PolishPizzeria) => {
    return pizzeria.pizzasInOrder
        .map(pizza => createTrNode(pizza))
        .join();
}

table.innerHTML = getRowsWithOrderedPizzas(venezia);