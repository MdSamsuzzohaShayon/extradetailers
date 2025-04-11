"use client";

import { IBooking, IService, TModuleStyle } from "@/types";
import LocalStorage from "@/utils/LocalStorage";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import PaymentCard from "./PaymentCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { servicesOptions } from "@/app/_requests/services";


interface ICheckoutProps {
  styles: TModuleStyle;
}

function Checkout({styles}: ICheckoutProps) {
  const [cartItems, setCartItems] = useState<IBooking[]>([]);
  const [total, setTotal] = useState<number>(0);

  const { data: allServices } = useSuspenseQuery(servicesOptions);

  useEffect(() => {
    if (!allServices?.length) return;

    const items = LocalStorage.getOrders();
    const serviceMap = new Map<number, IService>(
      allServices.map((s) => [s.id, s])
    );

    // Process items in a single pass
    const processedItems = items.map((item) => ({
      ...item,
      service_details: serviceMap.get(item.service),
    }));

    const total = processedItems.reduce(
      (sum, item) => sum + (item.service_details?.price || 0),
      0
    );

    setCartItems(processedItems);
    setTotal(total);
  }, [allServices]);

  return (
    <div className="container">
      <div className="row g-5 align-items-start">
        <div className="col-lg-8">
          <h2 className="mb-4">Shopping Cart</h2>
          <p className="text-muted">Review your selected services before checkout.</p>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ItemList cartItems={cartItems} styles={styles} />
          )}
        </div>

        <div className="col-lg-4">
          <PaymentCard total={total} styles={styles} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;


