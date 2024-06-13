const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pdfSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('PDF', pdfSchema);
