import React, { useState, useEffect } from 'react';
import HeaderBar from '../components/HeaderBar';
import BookingCard from '../components/BookingCard';
import { getBookings } from '../BookingService';

const BookingContainer = function() {

    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        getBookings()
        .then((bookingsData) =>
        setBookings(bookingsData))
    }, []) 

    const removeBookingFromState = (id) => {
        let bookingsList = [...bookings]
        const tempBookingsIds = bookings.map(booking => booking._id)
        const bookingToRemove = tempBookingsIds.indexOf(id)
        bookingsList.splice(bookingToRemove, 1)
        setBookings(bookingsList)
    }

    const addBookingToState = (newBooking) => {
        let bookingsList = [...bookings, newBooking]
        // bookingsList.push(newBooking)
        setBookings(bookingsList)
    }
    
    const renderBookingCard = function(){
        if(bookings.length > 0){
            return (
                <BookingCard bookings={bookings} removeBookingFromState={removeBookingFromState} />
            )
        }
        else {
            return (
                <p>Loading...</p>
            )
        }
    }

    return (
        <>
            <HeaderBar addBookingToState={addBookingToState}  />
            {renderBookingCard()}
        </>
    )
}

export default BookingContainer;