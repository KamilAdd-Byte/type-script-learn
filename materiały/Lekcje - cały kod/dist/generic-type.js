"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        this.data.shift();
    }
    getAll() {
        return this.data;
    }
}
const productItems = new Queue();
productItems.push({ id: 123, name: 'Milk' });
