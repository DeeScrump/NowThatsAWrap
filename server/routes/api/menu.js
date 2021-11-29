
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
// router.route("/menu/:menuId").post(postReview);
// router.route("/menu/:menuId").put(updateReview);
// router.route("/menu/:menuId").delete(deleteReview);

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
