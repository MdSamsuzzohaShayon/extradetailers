import { EUserRole, IBooking, IUser } from "@/types";

class LocalStorage {
    private static instance: LocalStorage;
    private readonly ORDER: string;
    private readonly ACCESS_TOKEN: string;
    private readonly USER_ROLE: string;

    private constructor() {
        this.ORDER = "order_list";
        this.ACCESS_TOKEN = "access_token";
        this.USER_ROLE = "user_role";
    }

    static getInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage();
        }
        return LocalStorage.instance;
    }

    getOrders(): IBooking[] {
        const oi = localStorage.getItem(this.ORDER);
        const orderList: IBooking[] = oi ? JSON.parse(oi) : [];
        return orderList;

    }
    setOrder(order: IBooking) {
        console.log(`Need to set order ${order}`);
        
        // const prevOrders = this.getOrders();
        // const findPrevIndex = prevOrders.findIndex((o) => o.productId === order.productId && o.date === order.date);
        // if (findPrevIndex !== -1) {
        //     // Update order
        //     prevOrders[findPrevIndex] = { ...prevOrders[findPrevIndex], ...order, id: prevOrders[findPrevIndex].id };
        // } else {
        //     prevOrders.push({ ...order, id: prevOrders.length + 1 });
        // }
        // localStorage.setItem(this.ORDER, JSON.stringify(prevOrders));

    }

    removeOrder(serviceId: number, orderDate: Date) {
        console.log(`Need to remove booking ${serviceId} created at ${orderDate}`);
        
        // const prevOrders = this.getOrders();
        // const newOrders = prevOrders.filter((o) => o.serviceId !== serviceId && o.date !== orderDate);
        // localStorage.setItem(this.ORDER, JSON.stringify(newOrders));

    }

    
    
    setUser(accessToken: string, userRole: EUserRole): void{
        if(!accessToken || !userRole) return;
        localStorage.setItem(this.ACCESS_TOKEN, accessToken);
        localStorage.setItem(this.USER_ROLE, userRole);
    }

    getUser(): IUser | null {
        const accessToken = localStorage.getItem(this.ACCESS_TOKEN);
        const userRole = localStorage.getItem(this.USER_ROLE) as EUserRole | null;

        return accessToken && userRole ? { accessToken, userRole } : null;
    }

    removeUser(): void{
        localStorage.removeItem(this.ACCESS_TOKEN);
        localStorage.removeItem(this.USER_ROLE);
    }
}

export default LocalStorage.getInstance();