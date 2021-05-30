"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        this.data.shift();
    };
    // implementacja metody  getAll() z interfejsu
    Queue.prototype.getAll = function () {
        return this.data;
    };
    return Queue;
}());
// określenie typu w kaście <>
var productItems = new Queue();
productItems.push({ id: 123, name: 'MILK', code: '4432' });
productItems.push({ id: 3, name: 'Chocolate', code: '65WER' });
console.log(productItems);
