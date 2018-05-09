const mongoose = require('mongoose');

let topicSchema = mongoose.Schema({
  title: String,
  content: String,
  phase: String,
  image: String
},{
  timestamps: true
})

let topic = mongoose.model('topic', topicSchema)

module.exports = topic;
