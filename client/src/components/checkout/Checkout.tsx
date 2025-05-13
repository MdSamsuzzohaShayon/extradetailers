"use client";

import {
  IBooking,
  IService,
  TModuleStyle,
} from "@/types";
import LocalStorage from "@/utils/LocalStorage";
import React, { useEffect, useMemo, useState } from "react";
import ItemList from "./ItemList";
import PaymentCard from "./PaymentCard";
import {
  useMutation,
  useQuery,
  // useSuspenseQuery,
} from "@tanstack/react-query";
import { servicesOptions } from "@/app/_requests/services";
import { useCreatePaymentIntentOptions } from "@/app/_requests/payments";

interface ICheckoutProps {
  styles: TModuleStyle;
}

function Checkout({ styles }: ICheckoutProps) {
  const [cartItems, setCartItems] = useState<IBooking[]>([]);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const { data: allServices } = useQuery(servicesOptions);

  

  const serviceMap = useMemo(() => {
    if(!allServices) return new Map();
    return new Map<number, IService>(allServices.map((s) => [s.id as number, s]));
  }, [allServices]);

  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + 120,
      0
    );
  }, [cartItems]);

  // Payment mutation — created after cartItems are set
  // ✅ UseMutation for creating a service
  // @ts-ignore
  const createIntentMutation = useMutation(useCreatePaymentIntentOptions());

  useEffect(() => {
    const items = LocalStorage.getOrders();

    setBookings(items);
    const processedItems = items.map((item) => ({
      ...item,
      service_details: serviceMap.get(item.service),
    }));

    setCartItems(processedItems);
  }, [serviceMap]);

  // Create Payment Intent once cartItems are loaded
  useEffect(() => {
    if (bookings.length === 0) return;

    // Prepare bookings for backend
    createIntentMutation
      .mutateAsync(bookings)
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => {
        console.error("Failed to create payment intent", err);
      });
  }, [bookings]);
  

  return (
    <div className="container">
      <div className="row g-5 align-items-start">
        <div className="col-lg-8">
          <h2 className="mb-4">Shopping Cart</h2>
          <p className="text-muted">
            Review your selected services before checkout.
          </p>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ItemList cartItems={cartItems} styles={styles} />
          )}
        </div>

        <div className="col-lg-4">
          <PaymentCard
            total={total}
            clientSecret={clientSecret}
            styles={styles}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
