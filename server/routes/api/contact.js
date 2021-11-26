const router = require('express').Router();
const contactController = require('../../controllers/contactController');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// matches with "/api/contact"
router.route('/contact').get(contactController.findAll);

module.exports = router;