
const express = require('express');
const router = express.Router();
const menuControls  = require('../../controllers/menuController');

// const { 
//     getMenu, 
//     getSingleMenu, 
//     postReview,
//     updateReview, 
//     deleteReview,
// } = require('../../controllers/menuController');

// import middleware
//const { authMiddleware } = require('../../utils/auth');

// matches with "/api/menu"
router.route('/').get(menuControls.getMenu);

// matches with "/api/menu/:id"
router.route('/:id').get(menuControls.getSingleMenu);
router.route('/:id/reviews').get(menuControls.getReviews);
router.route("/:id/reviews/:review_id").post(menuControls.postReview);
router.route("/:id/reviews/:review_id").put(menuControls.updateReview);
router.route("/:id/reviews/:review_id").delete(menuControls.deleteReview);

// router.route('/menu/:id').get((req,res) => {
//     menuSchema.findById(req.params.id).populate("reviews").exec((error, data) => {
//         if (error) {
//             res.status(500).send(err);
//         } else {
//             res.status(200).json(data)
//         }

//     })
// })
module.exports = router;
