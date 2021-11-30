const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Menu'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;