type TModuleStyle = { readonly [key: string]: string; };

// Service Interfaces
interface IServiceCategory {
    id?: number;
    name: string;
  }

interface IService {
    id?: number;
    serviceName: string;
    description: string;
    price: number;
    category: IServiceCategory; // Relationship to Category model
    available: boolean;
    image: File | null; // Storing image as a File object (it can also be a URL in a real-world case)
}

interface IAddOnService{
    id?: number;
    name: string;
    description: string;
    price_min: string;
    price_max: string;
    category: number;
}


// Booking Interface
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

interface ISubMenuItem{
    id: number;
    text: string;
    link: string;
}

interface IMenuItem{
    id: number;
    text: string;
    link: string;
    subMenu?: ISubMenuItem[];
}


interface IMessage{
    error: boolean;
    text: string;
}


interface IPaymentIntentResponse {
    client_secret: string;
  }


//   Enum 
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


export type { 
    TModuleStyle, 
    IService, IAddOnService, IServiceCategory,
    IBooking, IAPIError, IMessage, IUser, IMenuItem, IPaymentIntentResponse, ISubMenuItem }