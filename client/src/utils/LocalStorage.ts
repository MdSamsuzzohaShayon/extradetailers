import { IOrder } from "@/types";

class LocalStorage {
    ORDER: string;
    constructor() {
        this.ORDER = "order_list";
    }

    getOrders(): IOrder[] {
        const oi = localStorage.getItem(this.ORDER);
        const orderList: IOrder[] = oi ? JSON.parse(oi) : [];
        return orderList;

    }
    setOrder(order: IOrder) {
        const prevOrders = this.getOrders();
        const findPrevIndex = prevOrders.findIndex((o) => o.productId === order.productId && o.date === order.date);
        if (findPrevIndex !== -1) {
            // Update order
            prevOrders[findPrevIndex] = { ...prevOrders[findPrevIndex], ...order, id: prevOrders[findPrevIndex].id };
        } else {
            prevOrders.push({ ...order, id: prevOrders.length + 1 });
        }
        localStorage.setItem(this.ORDER, JSON.stringify(prevOrders));

    }

    removeOrder(productId: number, orderDate: Date) {
        const prevOrders = this.getOrders();
        const newOrders = prevOrders.filter((o) => o.productId !== productId && o.date !== orderDate);
        localStorage.setItem(this.ORDER, JSON.stringify(newOrders));

    }
}

export default LocalStorage;