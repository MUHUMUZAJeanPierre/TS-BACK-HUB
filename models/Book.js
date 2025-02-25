const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: ['fiction', 'non-fiction', 'mystery', 'other'],
    default: 'other',
  },
  publicationDate: {
    type: Date,
    required: [true, 'Publication date is required'],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', bookSchema);