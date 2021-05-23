export class Pizzeria {
    constructor(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = 'Jan Kowalski';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    getPaymentMethod(payment) {
        switch (payment.type) {
            case 'cash': return `Paid in cash in ${payment.currency}`;
            case 'debitCard': return `Paid with debit card with code ${payment.code}`;
            case 'onlinePayment': return `Paid online, with bank account ${payment.bankAccount}`;
        }
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    changeStatus(index, status) {
        this.pizzasInOrder[index].status = status;
    }
    changeSize(index, size) {
        this.pizzasInOrder[index].size = size;
    }
    checkPrice({ price }) {
        if (typeof price === 'string') {
            console.log('price is string', price.toLowerCase());
        }
        else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        }
        else {
            console.log(price);
        }
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
Pizzeria.id = 0;
