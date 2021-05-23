"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var amerikan_pizzeria_1 = require("./amerikan-pizzeria");
var laStrada = new polish_pizzeria_1.PolishPizzeria('La Strada', true);
var americana = new polish_pizzeria_1.PolishPizzeria('Americana', false);
var hawajska = new polish_pizzeria_1.PolishPizzeria('Hawajska', true);
var diablo = new amerikan_pizzeria_1.AmericanPizzeria('Diablo');
// laStrada.order('Hawajska');
// laStrada.manager = 'Mas'
// diablo.manager='Amerikan Psycho';
// wyświetlanie
console.log(laStrada, americana, hawajska, diablo);
