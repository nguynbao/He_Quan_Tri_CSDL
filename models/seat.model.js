const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const SeatSchema = new Schema({
  showtime: { type: Types.ObjectId, ref: 'Showtime', index: true, required: true },
  seatCode: { type: String, required: true },         // "A1", "A2", ...
  groupId: { type: String, index: true },             
  seatType: { type: String, enum: ['single', 'couple_left', 'couple_right'], required: true },
  status: { type: String, enum: ['free', 'held', 'sold'], default: 'free', index: true },
  holdBy: { type: Types.ObjectId, ref: 'AuthUser' },
  holdUntil: { type: Date }                           
}, { timestamps: true });

SeatSchema.index({ showtime: 1, seatCode: 1 }, { unique: true }); // chống trùng
SeatSchema.index({ holdUntil: 1 }); 

module.exports = mongoose.model('Seat', SeatSchema);
