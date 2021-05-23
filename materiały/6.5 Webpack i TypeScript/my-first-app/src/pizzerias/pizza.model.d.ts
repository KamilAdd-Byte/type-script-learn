export interface Pizza {
    name: string;
    price: number | string;
    size: string;
    status: Status;
}
export declare enum Status {
    Ordered = 0,
    Baked = 1,
    Sold = 2,
}
export declare enum Size {
    small = "small",
    medium = "medium",
    large = "large",
}
export declare type SizeKey = keyof typeof Size;
export interface Cash {
    type: 'cash';
    currency: string;
}
export interface DebitCard {
    type: 'debitCard';
    code: string;
}
export interface OnlinePayment {
    type: 'onlinePayment';
    bankAccount: number;
}
export declare type PaymentMethod = Cash | DebitCard | OnlinePayment;
