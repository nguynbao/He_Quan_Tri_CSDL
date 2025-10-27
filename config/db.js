const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI ||'mongodb://127.0.0.1:27017/demo';

mongoose.set('strictQuery', true);

mongoose.connect(MONGO_URI, {
     autoIndex: true
}).then(() =>{
     console.log("kết nối thành công với MongoDB");
}).catch((error) =>{
     console.log('Lỗi kết nối mongoDB', error);

});

module.exports = mongoose;
