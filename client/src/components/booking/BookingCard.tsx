'use client'

import { IBooking } from '@/types';
import React from 'react';

interface IBookingCardProps {
  booking: IBooking;
  styles: Record<string, string>;
  handleDeleteBooking: (e: React.SyntheticEvent, bookingId: number) => void;
}

function BookingCard({ booking, styles, handleDeleteBooking }: IBookingCardProps) {
  const setEditingBooking = (bookingId: number) => {
    console.log(bookingId);

  }
  // Delete booking need to work properly with mutation
  // Create a next.js provider to handle error/display error in both server component and client component. Is it possible?
  // Error handling - https://nextjs.org/docs/app/building-your-application/routing/error-handling

  return (
    <div className={`card ${styles.bookingCard}`} key={booking.id}>
      <h5 className="card-header">{booking?.service_details?.title}</h5>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{booking.status}</h5>
        <p className="card-text">{booking.service_details.price}</p>
        <p className="card-text">{booking.service_details.time}</p>
        <p className="card-text">{booking.user}</p>
        <button className="btn btn-primary me-2" onClick={() => setEditingBooking(booking.id)}>Edit</button>
        <button className="btn btn-danger" onClick={(e) => handleDeleteBooking(e, booking.id)}>Delete</button>
      </div>
    </div>
  )
}

export default BookingCard;