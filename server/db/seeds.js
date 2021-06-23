use hotel;
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Ringo Starr",
        email: "thomas4life@hotmail.co.uk",
        checked_in: false
    },
    {
        name: "Yoko Ono",
        email: "beatlesassassin@gmail.com",
        checked_in: false
    }
])