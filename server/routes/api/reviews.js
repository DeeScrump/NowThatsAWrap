const express = require("express");
const router = express.Router();
//const { getReview, postReview, updateReview, deleteReview} = require('../../controllers/reviewController');
const reviewControls = require('../../controllers/reviewController');

router.route('/menu/:id/').get(reviewControls.getReview);
router.route('/menu/:id/').post(reviewControls.postReview);
router.route('/menu/:id/reviews/:review_id').put(reviewControls.updateReview);
router.route('/menu/:id/reviews/:review_id').delete(reviewControls.deleteReview);


module.exports = router;