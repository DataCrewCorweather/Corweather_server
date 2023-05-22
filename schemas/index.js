const mongoose = require("mongoose");
const MONGO_DB_URL = 'mongodb://localhost:27017/test';

module.exports = () => {
    const connect = async () => {
        try {
          await mongoose.connect(MONGO_DB_URL, {
            useNewUrlParser: true,
          });
          console.log('MongoDB Connected');
      
          mongoose.connection.on('error', (err) => {
            console.error('Mongo DB connect ERROR',err);
          });
        
          mongoose.connection.addListener('disconnected', () => {
            console.log('몽고 디비 연결이 끊어졌습니다. 연결을 재시도 합니다.');
          });
        } catch (err) {
          console.log(err);
        }
      }
      
      connect();

    require("./weather");
};

