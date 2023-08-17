const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  topic: String,
  date: Date,
  report: String,
  organizedBy: String
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
