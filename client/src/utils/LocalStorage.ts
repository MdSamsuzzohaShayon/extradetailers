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

    clearOrders() {
        localStorage.removeItem(this.ORDER);
    }

    addOrder(order: IBooking) {
        
        const prevOrders = this.getOrders();
        const findPrevIndex = prevOrders.findIndex((o) => o.service === order.service && o.order_date === order.order_date && o.slot === order.slot);
        if (findPrevIndex !== -1) {
            // Update order
            prevOrders[findPrevIndex] = { ...prevOrders[findPrevIndex], ...order, id: prevOrders[findPrevIndex].id };
        } else {
            prevOrders.push({ ...order, id: prevOrders.length + 1 });
        }
        localStorage.setItem(this.ORDER, JSON.stringify(prevOrders));
        console.log(`Order added ${order}`);    

    }

    removeOrder(serviceId: number, orderDate: string, slot: string) {
        const prevOrders = this.getOrders();
        const newOrders = prevOrders.filter((o) => o.service !== serviceId && o.order_date !== orderDate && o.slot !== slot);
        localStorage.setItem(this.ORDER, JSON.stringify(newOrders));
        console.log(`Order removed ${serviceId} created at ${orderDate} at ${slot}`);
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