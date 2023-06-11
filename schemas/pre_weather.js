const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const preWeatherSchema = new Schema({
  location: {
    type: String
  },
  date: {
    type: String
  },
  weather: {
    type: String
  },
  rain_per:{
    type: Number
  }

});

module.exports = mongoose.model("pre_weather", preWeatherSchema);