const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  activitytype: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('User', UserSchema);

