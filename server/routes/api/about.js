const router = require('express').Router();
const aboutController = require('../../controllers/aboutController');

// import middleware
//const { authMiddleware } = require('../../utils/auth');

// matches with "/api/about"
router.route('/about').get(aboutController);

module.exports = router;
