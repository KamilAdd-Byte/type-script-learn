"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polish_pizzeria_1 = require("./polish-pizzeria");
var amerikan_pizzeria_1 = require("./amerikan-pizzeria");
var pizza_model_1 = require("./pizza.model");
var germany_pizzeria_1 = require("./germany-pizzeria");
// tworzenie obiektów Pizzeria
var laStrada = new polish_pizzeria_1.PolishPizzeria('La Strada', true);
var berlin = new germany_pizzeria_1.GermanyPizzeria('Berlińska', false);
var hawajska = new polish_pizzeria_1.PolishPizzeria('Hawajska', true);
var diablo = new amerikan_pizzeria_1.AmericanPizzeria('Diablo');
// dodawanie pizz z wykorzystaniem interfejsów, enumów i metod w TS
// 1 tworzenie obiektu pizza
var rzeznicka = {
    name: 'Rzeźnicka',
    price: 25.99,
    size: 'large',
    status: pizza_model_1.Status.Ordered
};
// operowanie na obiekcie Pizzeria. Dodanie pizzy do zamówienia
laStrada.order(rzeznicka);
laStrada.changeStatus(0, pizza_model_1.Status.Baked);
laStrada.changeSize(0, 'large');
// wyświetlanie
