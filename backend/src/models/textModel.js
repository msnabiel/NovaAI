const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Text', TextSchema);
