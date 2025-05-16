"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, useMemo } from "react";
import PackageCard from "./PackageCard";
import {
  EBookingStatus,
  IBooking,
  IService,
  IServicePopulated,
  IVehicleType,
  TModuleStyle,
} from "@/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "@tanstack/react-query";
import {
  combinedServicesOptions,
  servicesOptions,
} from "@/app/_requests/services";
import LocalStorage from "@/utils/LocalStorage";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
// import LocalStorage from '@/utils/LocalStorage';

interface IPackageListProps {
  styles: TModuleStyle;
}

const timeSlots = {
  Morning: ["9:00am", "10:00am", "11:00am"],
  Afternoon: ["12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm"],
  Evening: ["5:00pm"],
};

function PackageList({ styles }: IPackageListProps) {
  const router = useRouter();

  const { data: combinedServices } = useQuery(combinedServicesOptions);
  const user = useUser();
  const [cartItems, setCartItems] = useState<IBooking[]>([]);
  // console.log({allServices});

  const modalEl = useRef(null);
  const [selectedProduct, setSelectedProduct] =
    useState<IServicePopulated | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
        const modalElement = document.getElementById("packageModal");
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement);
          modalEl.current = modal;
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          selectedProduct ? modal.show() : modal.hide();
        }
      });
    }
  }, [selectedProduct]);

  const handleSelectProduct = (product: IServicePopulated) => {
    setSelectedProduct(product);
  };

  const handleDateChange = (
    date: Date | null,
    event?: React.SyntheticEvent<unknown>
  ) => {
    event?.preventDefault();
    if (date) {
      // Set time to 00:00:00 while keeping the date
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0);
      setSelectedDate(normalizedDate);
    }
    setSelectedTimeSlot(null);
  };

  const handleSelectTimeSlot = (slot: string) => {
    if (!selectedProduct || !selectedDate) return;
    setSelectedTimeSlot(slot);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (modalEl.current) modalEl.current.hide();
  };

  const handleProceedToCheckout = () => {
    if (selectedProduct && selectedDate && selectedTimeSlot) {
      const booking: IBooking = {
        service: selectedProduct.id as number,
        order_date: selectedDate.toISOString(),
        slot: selectedTimeSlot,
      };

      // If user is logged in, add to cart and show checkout button
      setCartItems([...cartItems, booking]);
      LocalStorage.addOrder(booking);
      if (user) {
        setShowCheckout(true);
      } else {
        // @ts-ignore
        if (modalEl.current) modalEl.current.hide();
        // Show signin button
        router.push("/signin");
      }
    }
  };

  const handleToggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tab-pane fade show active" id="packages" role="tabpanel">
        {combinedServices?.services.map((service, index)=>(<PackageCard key={service.id} styles={styles} service={service} index={index} isActive={activeIndex === index}
        vehicleTypes={combinedServices.vehicle_types} onSelect={handleSelectProduct} onToggle={() => handleToggleAccordion(index)} />))}
    </div>
  );
}

export default PackageList;
