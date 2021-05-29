export interface Pizza {
    name: string;
    price: number | string;
    size: SizePizza;
}
export enum Status {    //enum numeryczny
    Ordered,
    Baked,
    Sold
}
export enum SizePizza { //enum łańcuch znaków
    small = 'small',
    medium = 'medium',
    large = 'large',
    extra_large = 'extra-large'
}

export type SizeKey = keyof typeof SizePizza;

