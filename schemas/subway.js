const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const subwaySchema = new Schema({
  date: {
    type: Number
  },
  line: {
    type: String
  },
  station: {
    type: String
  },
  riding: {
    type: Number
  },
  quit:{
    type: Number
  }

});

module.exports = mongoose.model("subways", subwaySchema);