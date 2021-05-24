export interface Pizza {
    name: string;
    price: number | string;
    size: string;
}
export enum Status {    //enum numeryczny
    Ordered,
    Baked,
    Sold
}
export enum SizePizza { //enum łańcuch znaków
    small = 'small',
    medium = 'medium',
    large = 'large'
}
