const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  // userid: {
  //   type: String,
  //   required: true,
  // },

  title: { 
    type: String,  
    required: true,
  }, 

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['Open', 'Planned', 'In Progress', 'Done'],
    default: 'Open',
  },

  upvote: {
    type: Number,
    default: 0,
  }

}, {
  timestamps: true  // This adds createdAt and updatedAt automatically
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
