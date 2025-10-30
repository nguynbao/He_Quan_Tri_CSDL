const Seat      = require('./seat.model');
const Showtime  = require('./showtime.model');
const Ticket    = require('./ticket.model');
const models = { Seat, Showtime, Ticket };
async function ensureCollections() {
     for (const Model of Object.values(models)) {
          await Model.createCollection(); // tạo collection nếu chưa có
          await Model.init();             // build index
  }
}
module.exports = { ...models, ensureCollections };