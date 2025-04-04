'use client'

import { IBooking } from '@/types';
import React from 'react';
import BookingCard from './BookingCard';
import { DefaultError, useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { deleteBookingOptions, bookingsOptions } from '@/app/_requests/bookings';
// import { useError } from '@/lib/ErrorProvider';


interface BookingListProps {
    styles: Record<string, string>;
}
function BookingList({ styles }: BookingListProps) {
    // const { setError } = useError();
    const queryClient = useQueryClient(); // ✅ React Query Client
    const { data: allBookings } = useSuspenseQuery(bookingsOptions);

    const deleteBookingMutation = useMutation<unknown, DefaultError, number>(deleteBookingOptions(queryClient));


    const handleDeleteBooking = async (e: React.SyntheticEvent, bookingId: number) => {
        e.preventDefault();
        await deleteBookingMutation.mutate(bookingId);
    }

    if (deleteBookingMutation.isPending) return <div>Loading</div>;

    

    return (
        <div className="d-flex flex-wrap gap-2 mt-3">
            {/* <button onClick={() => setError('Something went wrong!')}>
                Trigger Error
            </button> */}

            {allBookings.length > 0 
            ? allBookings.map((booking: IBooking) => (
                <BookingCard key={booking.id} booking={booking} styles={styles} handleDeleteBooking={handleDeleteBooking} />
            ))
        : <div className='alert alert-primary'>You have no bookings</div>}
        </div>
    )
}

export default BookingList;