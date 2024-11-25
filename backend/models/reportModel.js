const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  trainNo: { type: String, required: true },
  date: { type: String, required: true },
  scale: { type: Number, required: true },
});

module.exports = mongoose.model('Report', reportSchema);
