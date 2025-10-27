const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const TicketSchema = new Schema({
    showtime: {type: Types.ObjectId, ref: 'Showtime', index: true, require: true},
    seats: [{type: String, require: true}],
    user: {type: Types.ObjectId, ref: 'AuthUser', require: true},
    priceSnapshot: Number,
    orderId: { type: String, index: true},
    paymentStatus: {type: String, enum: ['unpaid', 'paid', 'refunded'], default: 'unpaid'}, 
}, {timestamps: true});

TicketSchema.index({ showtime: 1, seats: 1 }, { unique: true }); // chống double-book

module.exports = mongoose.model('Ticket', TicketSchema);