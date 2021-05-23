interface Item {
    name: string;
}

interface Item {
    code: string;
}

interface ProductsQueue<T> {
    push(item: T): void;
    getAll(): T[];
}

class Queue<T extends Item> implements ProductsQueue<T> {
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data;
    }
}

interface ProductItem {
    id: number;
}

const productItems = new Queue<ProductItem & Item>();
productItems.push({ id: 123, name: 'Milk', code: 'AA333' })