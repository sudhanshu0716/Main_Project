const mongoose = require('mongoose');

const LostAndFoundSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  date: { type: String, required: true },
  itemDescription: { type: String, required: true },
  contactDetails: { type: String, required: true },
  founded: { type: Boolean, default: false }, // Flag for founded items
});

const LostAndFound = mongoose.model('LostAndFound', LostAndFoundSchema);
module.exports = LostAndFound;
