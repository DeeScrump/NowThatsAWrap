const router = require('express').Router();
const menuController = require('../../controllers/menuController');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// matches with "/api/menu"
router.route('/').get(menuController.findAll);
router.route('/').post(menuController.create);

// matches with "/api/menu/:id"
router.route("/:id").get(menuController.findById);
router.route("/:id").put(menuController.update);
router.route("/:id").delete(menuController.remove);



module.exports = router;
