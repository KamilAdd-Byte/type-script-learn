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
    return Queue;
}());
// określenie typu w kaście <>
var people = new Queue();
people.push({ id: 123, name: 'MILK' });
