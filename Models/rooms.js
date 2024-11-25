const { strict } = require("assert");
const { Timestamp } = require("bson");
const mongoose = require("mongoose");
// const { type } = require("os");
const newSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    imgurl: [],
    currentbookings: [],
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const roomModel = mongoose.model("rooms", newSchema);
module.exports = roomModel;
