const mongoose = require('mongoose');

const { Schema } = mongoose;

const CateringSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Menu'
    }
  ]
});

const Order = mongoose.model('Catering', CateringSchema);

module.exports = Catering;
