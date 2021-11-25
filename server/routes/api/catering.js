const router = require('express').Router();
const cateringController = require('../../controllers/cateringController');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// matches with "/api/catering"
router.route('/catering').get(cateringController);

module.exports = router;