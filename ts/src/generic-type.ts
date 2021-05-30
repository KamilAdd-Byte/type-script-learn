interface Item {
    name: string;
}

class Queue<T extends Item> {
    private data: T[] = [];

    push(item: T) {
        this.data.push(item)
    }

    pop() {
        this.data.shift();
    }
}

interface ProductItem {
    id: number;
    name: string;
}
// określenie typu w kaście <>
const people = new Queue<ProductItem>();
people.push( {id: 123,name:'MILK'} );

