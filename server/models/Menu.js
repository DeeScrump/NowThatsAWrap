const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    min: 0.99
  }, 
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  
    // reviews: {
    //   type: String,
    //   ref: 'Review'
    // }
    
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
