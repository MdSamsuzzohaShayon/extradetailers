type TModuleStyle = { readonly [key: string]: string; };


interface IService {
    id: number;
    title: string;
    price: number;
    time: string;
    description: string;
}

interface IBooking {
    id?: number;
    user?: string;
    service: number;
    service_details?: IService;
    order_date: string;
    slot: string;
    status?: EBookingStatus;
}

interface IAPIError {
    response?: {
        data?: { message?: string };
        status?: number;
    };
    message?: string;
};

interface IUser{
    accessToken: string;
    userRole: string;
}

interface IMenuItem{
    id: number;
    text: string;
    link: string;
}


interface IMessage{
    error: boolean;
    text: string;
}

export enum EUserRole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    DETAILER = 'detailer'
}

export enum EBookingStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    CANCELED = "canceled",
}


export type { TModuleStyle, IService, IBooking, IAPIError, IMessage, IUser, IMenuItem }