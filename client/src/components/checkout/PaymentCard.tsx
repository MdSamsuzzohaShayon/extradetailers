'use client'

import { TModuleStyle } from "@/types";
import LocalStorage from "@/utils/LocalStorage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IPaymentCardProps {
  total: number;
  styles: TModuleStyle;
}

function PaymentCard({ total, styles }: IPaymentCardProps) {
  const router = useRouter();

  const handlePayPalSuccess = async (details) => {
    // Save order details and clear cart
    LocalStorage.clearOrders();
    router.push("/dashboard");
  };

  const handleStripePayment = async () => {
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ items: cartItems }),
    // });
    // const session = await response.json();
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // if (result.error) {
    //   console.error(result.error);
    // }
  };

  return (
    <div className={`card border-0 shadow-sm ${styles.glassEffect} p-3`}>
      <div className="card-body">
        <h4 className="card-title mb-4 border-bottom pb-2">🧾 Order Summary</h4>
        <div className="d-flex justify-content-between mb-3">
          <span className="text-muted">Subtotal</span>
          <span>${total}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span className="text-muted">Tax</span>
          <span>$0.00</span>
        </div>
        <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <div className="d-grid gap-3">
          {/* <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toString()
                }
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(handlePayPalSuccess);
          }}
        /> */}

          <button className="btn btn-primary">
            💳 Pay with Stripe
          </button>
          <button className="btn btn-warning">
            🅿️ Pay with PayPal
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
