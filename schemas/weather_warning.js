const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const weather_warningSchema = new Schema({
  time: {
    type: String
  },
  location: {
    type: String
  },
  context: {
    type: String
  }

});

module.exports = mongoose.model("weathter_warning", weather_warningSchema);