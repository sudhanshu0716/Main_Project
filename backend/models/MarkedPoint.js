const mongoose = require("mongoose");

const markedPointSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("MarkedPoint", markedPointSchema);
