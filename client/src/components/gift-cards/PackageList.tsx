'use client'

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import PackageCard from './PackageCard';
import { IService, TModuleStyle } from '@/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSuspenseQuery } from '@tanstack/react-query';
import { servicesOptions } from '@/app/_requests/services';
// import LocalStorage from '@/utils/LocalStorage';

interface IPackageListProps {
    styles: TModuleStyle;
}

const timeSlots = {
    Morning: ["9:00am", "10:00am", "11:00am"],
    Afternoon: ["12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm"],
    Evening: ["5:00pm"]
};

function PackageList({ styles }: IPackageListProps) {
    const { data: allServices } = useSuspenseQuery(servicesOptions);
    console.log({allServices});
    

    const modalEl = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState<IService | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);


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

    const handleSelectProduct = (product: IService) => {
        setSelectedProduct(product);
    };

    const handleDateChange = (date: Date | null, event?: React.SyntheticEvent<unknown>) => {
        event?.preventDefault();
        if (date) {
            setSelectedDate(date);
        }
        setSelectedTimeSlot(null);
    };

    const handleSelectTimeSlot = (slot: string) => {
        if (!selectedProduct || !selectedDate) return;
        setSelectedTimeSlot(slot);
        // Set order to local storage
        // const newOrder: IBooking = {
        //     id: 1,
        //     date: selectedDate,
        //     productId: selectedProduct.id,
        //     slot,
        // };
        // LocalStorage.setOrder(newOrder);
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
            alert(`Proceeding to checkout with ${selectedProduct.title} on ${selectedDate.toDateString()} at ${selectedTimeSlot}`);
            handleCloseModal();
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ul className={`${styles.packageList} d-flex flex-column justify-content-between align-items-stretch h-100 w-100`}>
                        {allServices.map((service, index) => (
                            <PackageCard
                                index={index}
                                service={service}
                                styles={styles}
                                key={index}
                                onSelect={handleSelectProduct}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="w-100 h-100 shadow">
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/imgs/car-cleaning-discounts.jpg"
                                height={200}
                                width={250}
                                alt="Car-cleaning-discount-img"
                                className={`${styles.cleaningDiscount} w-100 h-100 object-cover`}
                            />
                        </div>
                        <div className={`${styles.imgContent} p-3`}>
                            <p className='mt-5 fw-bold text-primary text-uppercase'>Call Us to Find Out More</p>
                            <h3 className='fw-bold display-4'>987 654 3210</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Modal */}
            <div
                className="modal fade"
                id="packageModal"
                tabIndex={-1}
                aria-labelledby="packageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content shadow-lg rounded-3 border-0">
                        {/* Modal Header */}
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title fw-bold" id="packageModalLabel">
                                Select a Date & Time for <span className="text-warning">{selectedProduct?.title}</span>
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={handleCloseModal}
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body p-4">
                            {/* Date Picker */}
                            <div className="form-group">
                                <label className="form-label fw-bold text-dark mb-2">Choose a Date</label>
                                <div className="d-flex justify-content-center">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                        inline
                                        locale="en"
                                        className="form-control w-100"
                                        wrapperClassName="w-100"
                                        calendarClassName="border rounded-3 shadow-sm p-2 bg-light"
                                    />
                                </div>
                            </div>

                            {/* Time Slots */}
                            {selectedDate && (
                                <div className="mt-4">
                                    <h5 className="fw-bold text-dark">Available Time Slots</h5>
                                    {Object.entries(timeSlots).map(([period, slots]) => (
                                        <div key={period} className="mt-2">
                                            <h6 className="text-primary fw-bold">{period}</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {slots.map((slot) => (
                                                    <button
                                                        key={slot}
                                                        className={`btn ${selectedTimeSlot === slot ? "btn-success" : "btn-outline-primary"} fw-bold`}
                                                        onClick={() => handleSelectTimeSlot(slot)}
                                                    >
                                                        {slot}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer bg-light border-top-0 d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-outline-danger fw-bold px-4"
                                onClick={handleCloseModal}
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                className="btn btn-success fw-bold px-4"
                                disabled={!selectedDate || !selectedTimeSlot}
                                onClick={handleProceedToCheckout}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PackageList;
