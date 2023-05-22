const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const weatherSchema = new Schema({
  location_id: {
    type: Number
  },
  location_name: {
    type: String
  },
  date: {
    type: String
  },
  temp: {
    type: Number
  },
  day_rain:{
    type: Number
  }

});

module.exports = mongoose.model("weathers", weatherSchema);