const mongoose = require('mongoose');

const LostAndFoundSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  date: { type: Date, required: true }, // Use Date type
  itemDescription: { type: String, required: true },
  contactDetails: { type: String, required: true },
  founded: { type: Boolean, default: false },
});


const LostAndFound = mongoose.model('LostAndFound', LostAndFoundSchema);
module.exports = LostAndFound;
