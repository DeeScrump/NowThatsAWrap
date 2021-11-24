const router = require('express').Router();
const homeRoutes = require('./home');
const menuRoutes = require('./menu');
const aboutRoutes = require('./about');
const contactRoutes = require('./contact');
const cateringRoutes = require('./catering');

router.use('/', homeRoutes);
router.use('/menu', menuRoutes);
router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);
router.use('/catering', cateringRoutes);


module.exports = router;