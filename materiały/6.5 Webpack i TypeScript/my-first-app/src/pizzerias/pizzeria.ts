import { Orderable } from './orderable';
import { Pizza, Status, SizeKey, PaymentMethod } from './pizza.model';

export abstract class Pizzeria implements Orderable {
    static id = 0;
    id: number;
    name: string;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOven = 10;
    protected recipes: string[] = [];
    private _manager = 'Jan Kowalski';

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    getPaymentMethod(payment: PaymentMethod) {
        switch (payment.type) {
            case 'cash': return `Paid in cash in ${payment.currency}`
            case 'debitCard': return `Paid with debit card with code ${payment.code}`
            case 'onlinePayment': return `Paid online, with bank account ${payment.bankAccount}`
        }
    }

    order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    changeSize(index: number, size: SizeKey) {
        this.pizzasInOrder[index].size = size;
    }

    checkPrice({ price }: Pizza) {
        if (typeof price === 'string') {
            console.log('price is string', price.toLowerCase());
        } else if (typeof price === 'number') {
            console.log('price is number', price.toFixed());
        } else {
            console.log(price);
        }
    }

    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake(): void
}
