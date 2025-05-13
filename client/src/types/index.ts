type TModuleStyle = { readonly [key: string]: string; };

interface IDefaultModel{
    id?: number;
}

// Service Interfaces
interface IServiceCategory extends IDefaultModel {
    name: string;
  }

interface IServiceCommon extends IDefaultModel{
    title: string;
    description: string;
    estimated_time_min: number;
    estimated_time_max: number;
}

interface IService extends IServiceCommon {
    category: number; // Relationship to Category model
    features: number[];
    prices: number[];
}

interface IServicePopulated extends IServiceCommon {
    category: IServiceCategory; // Relationship to Category model
    features: IServiceFeature[];
    prices: IServicePrice[];
}

interface IAddOnService extends IDefaultModel{
    name: string;
    description: string;
    price_min: string;
    price_max: string;
    category: number;
}

interface IAddOnServicePopulated extends IDefaultModel{
    name: string;
    description: string;
    price_min: string;
    price_max: string;
    category: IServiceCategory;
}

interface IServiceFeature extends IDefaultModel{
    service: number;
    feature_description: string;
}

interface IVehicleType extends IDefaultModel{
    name: string;
}

interface IServicePrice extends IDefaultModel{
    service: number;
    vehicle_type: number;
    price: number;
}




// Booking Interface
interface IBooking extends IDefaultModel {
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
    IService, IAddOnService, IServiceCategory, IServiceFeature, IVehicleType, IServicePrice, 
    IServicePopulated, IAddOnServicePopulated,
    IBooking, IAPIError, IMessage, IUser, IMenuItem, IPaymentIntentResponse, ISubMenuItem }