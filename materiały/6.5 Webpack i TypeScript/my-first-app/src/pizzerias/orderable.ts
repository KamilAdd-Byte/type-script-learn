import { Pizza } from "./pizza.model";

export interface Orderable {
    pizzasInOrder: Pizza[];
    order(pizza: Pizza): void;
}