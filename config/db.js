const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/cinema-booking";

const { ensureCollections } = require("../models/index.model");

mongoose.set("strictQuery", true);
mongoose.set("autoCreate", true);

mongoose
  .connect(MONGO_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("kết nối thành công với MongoDB");
    ensureCollections()
      .then(() => {
        console.log(
          "Đảm bảo các collection đã được tạo và index đã được xây dựng"
        );
      })
      .catch((error) => {
        console.log("Lỗi khi đảm bảo collection và index:", error);
      });
  })
  .catch((error) => {
    console.log("Lỗi kết nối mongoDB", error);
  });

module.exports = mongoose;
