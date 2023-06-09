const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const traffic_weatherSchema = new Schema({
  date: {
    type: Number
  },
  avg_velo: {
    type: Number
  },
  weather: {
    type: String
  },
  max_degree: {
    type: Number
  },
  min_degree:{
    type: Number
  }

});

module.exports = mongoose.model("traffic_weather", traffic_weatherSchema);