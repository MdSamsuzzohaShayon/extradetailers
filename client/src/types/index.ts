type TModuleStyle = { readonly [key: string]: string; };


interface IService{
    id: number;
    title: string;
    price: number;
    time: string;
    description: string;
}

interface IBooking{
    id: number;
    productId: number;
    date: Date;
    slot: string;
}

export enum EUserRole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    DETAILER = 'detailer'
}   

export type { TModuleStyle, IService, IBooking }