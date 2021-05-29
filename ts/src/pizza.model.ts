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

// utworzenie interfejsów - sposoby płatności
export interface Cash {
    type: 'cash',
    currency: string;
}

export interface DebitCard {
    type: 'debitCard',
    code: string;
}

export interface OnlinePayment {
    type: 'onlinePayment',
    bankAccount: number;
}

// Union Type na podstawie 3 interfejsów

export type  PaymentMethod = Cash | DebitCard | OnlinePayment;
