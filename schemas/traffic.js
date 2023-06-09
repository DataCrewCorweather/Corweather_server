const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const trafficSchema = new Schema({
  road_name: {
    type: Number
  },
  location_name: {
    type: String
  },
  direction: {
    type: String
  },
  car_road: {
    type: String
  },
  date:{
    type: String
  },
  '00-01': {
    type: Number
  },
  '01-02': {
    type: Number
  },
  '02-03':{
    type: Number
  },
  '03-04': {
    type: Number
  },
  '04-05': {
    type: Number
  },
  '05-06':{
    type: Number
  },
  '06-07': {
    type: Number
  },
  '07-08': {
    type: Number
  },
  '08-09':{
    type: Number
  },
  '09-10': {
    type: Number
  },
  '10-11': {
    type: Number
  },
  '11-12':{
    type: Number
  },
  '12-13': {
    type: Number
  },
  '13-14': {
    type: Number
  },
  '14-15':{
    type: Number
  },
  '15-16': {
    type: Number
  },
  '16-17': {
    type: Number
  },
  '17-18':{
    type: Number
  },
  '18-19': {
    type: Number
  },
  '19-20': {
    type: Number
  },
  '20-21':{
    type: Number
  },
  '21-22': {
    type: Number
  },
  '22-23': {
    type: Number
  },
  '23-24':{
    type: Number
  }

});

module.exports = mongoose.model("traffics", trafficSchema);
