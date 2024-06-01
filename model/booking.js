
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const PrimeCut = require("./primecut");

const bookingSchema = new Schema({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    barberShop:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PrimeCut',
        required: true
    },
    service:
    {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        required: true
    },

    timeSlot:
    {
        type: String,
        required: true
    },
    status:
    {
        type: String,
        enum: ['booked', 'completed', 'cancelled'],
        default: 'booked'
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
