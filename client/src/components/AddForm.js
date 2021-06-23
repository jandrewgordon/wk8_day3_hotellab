import React from 'react';
import { addBooking } from '../BookingService';

const AddForm = ({addBookingToState}) => {

    const handleSubmit = (event) => {
        const newBookingName = event.target[0].value;
        const newEmail = event.target[1].value;
        const newStatus = false;
        const newBooking = {
            "name": newBookingName,
            "email": newEmail,
            "status": newStatus
        }
        addBooking(newBooking);
        addBookingToState(newBooking);
        




        // bookingCards.push(
        //     <div key={booking._id}>
        //         <h4>Name: {booking.name}</h4>
        //         <h4>Email: {booking.email}</h4>
        //         {checkInStatus(booking)}
        //         <button>Edit</button>
        //         <button onClick={handleDelete} value={booking._id}>Delete</button>
        //     </div>
        // )


        event.preventDefault()
    }
    //     let newBookingName = event.name.value


       

    // }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" required/>
                <label>Email:</label>
                <input type="email" name="email" required/>
                <input type="submit" name="save"/>
            </form>
        </>
    )
}

export default AddForm;