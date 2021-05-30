interface Item {
    name: string;
}

interface ProductsQueue<T> {
    //metoda w interfejsie przed zaimplementowaniem
    getAll(): T[];
    push(item: T): void;
}

class Queue<T extends Item> implements ProductsQueue<T>{
    private data: T[] = [];

    push(item: T) {
        this.data.push(item)
    }

    pop() {
        this.data.shift();
    }


    // implementacja metody  getAll() z interfejsu
    getAll(): any[] {
        return this.data;
    }
}

interface ProductItem {
    id: number;
    name: string;
}
// określenie typu w kaście <>
const productItems = new Queue<ProductItem>();
productItems.push( {id: 123,name:'MILK'} );
productItems.push( {id: 3,name:'Chocolate'});

console.log(productItems);

