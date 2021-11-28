const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema(
    {
        text: {
            type: String
        },
        menu_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Menu'
        }
    }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;