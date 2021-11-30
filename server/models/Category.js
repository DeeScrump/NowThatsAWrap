const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  menuId: {
    type: String,
  }
  
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;