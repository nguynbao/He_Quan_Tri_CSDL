const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const ShowtimeSchema = new Schema({
  movieId: Types.ObjectId,
  roomId: Types.ObjectId,
  startsAt: Date,
  capacity: Number
}, { timestamps: true });

module.exports = mongoose.model('ShowTime', ShowtimeSchema);