const express = require("express");
const router = express.Router();
const { getReview, postReview, updateReview, deleteReview} = require('../../controllers/reviewController');

router.route('/menu/:id/reviews').get(getReview);
router.route('/menu/:id/reviews').post(postReview);
router.route('/menu/:id/reviews/:review_id').put(updateReview);
router.route('/menu/:id/reviews/:review_id').delete(deleteReview);


module.exports = router;