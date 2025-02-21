type TModuleStyle = { readonly [key: string]: string; };


interface IProduct{
    id: number;
    title: string;
    price: number;
    time: string;
    desc: string;
}

interface IOrder{
    id: number;
    productId: number;
    date: Date;
    slot: string;
}

export type { TModuleStyle, IProduct, IOrder }