const router = require('express').Router();
const { getMenu, getSingleMenu } = require('../../controllers/menuController');

// import middleware
//const { authMiddleware } = require('../../utils/auth');

// matches with "/api/menu"
router.route('/menu').get(getMenu);

// matches with "/api/menu/:id"
router.route("/menu/:id").get(getSingleMenu);

// router.route("/:id").put(menuController.update);
// router.route("/:id").delete(menuController.remove);

module.exports = router;
