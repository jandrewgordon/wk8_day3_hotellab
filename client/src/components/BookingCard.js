import React from 'react';
import { deleteBooking } from '../BookingService';

const BookingCard = function({bookings, removeBookingFromState}) {
    
    let bookingCards = []

    const checkInStatus = function(booking){
        if(booking.checked_in === true){
            return(
                <h4>Status: Checked-in</h4>
            )
        }
        else {
            return (
                <h4>Status: Not checked-in</h4>
            )
        }
        
    }

    const handleDelete = function(event){
        deleteBooking(event.target.value)
        .then(() => {
            removeBookingFromState(event.target.value)
        })
    }

    for(let booking of bookings){
        console.log("for loop")
        bookingCards.push(
            <div key={booking._id}>
                <h4>Name: {booking.name}</h4>
                <h4>Email: {booking.email}</h4>
                {checkInStatus(booking)}
                <button>Edit</button>
                <button onClick={handleDelete} value={booking._id}>Delete</button>
            </div>
        )
    }
    return bookingCards;
}
    

export default BookingCard;