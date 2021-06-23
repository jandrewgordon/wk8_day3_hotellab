const baseURL = 'http://localhost:5000/api/bookings/';

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    console.log(baseURL + id)
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const addBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())

}