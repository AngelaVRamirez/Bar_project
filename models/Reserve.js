const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

module.exports = model('Reservation',reservationSchema)