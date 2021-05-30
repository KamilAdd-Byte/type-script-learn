interface Item {
    name: string;
}
interface Item {
    code: string;
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
}
// określenie typu w kaście <>
const productItems = new Queue<ProductItem & Item>();
productItems.push( {id: 123,name:'MILK',code: '4432'} );
productItems.push( {id: 3,name:'Chocolate',code: '65WER'});

console.log(productItems);

