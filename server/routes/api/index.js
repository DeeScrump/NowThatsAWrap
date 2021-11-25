const router = require('express').Router();

const homeRoutes = require('./');
const aboutRoutes = require('./about');
const menuRoutes = require('./menu');
const reviewsRoutes = require('./menu/:id/reviews');
const eventRoutes = require('./event');
const contactRoutes = require('./contact');
const cateringRoutes = require('./catering');

router.use('/', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/menu', menuRoutes);
router.use('/menu/:id/reviews', reviewsRoutes);
router.use('/event', eventRoutes);
router.use('/contact', contactRoutes);
router.use('/catering', cateringRoutes);


module.exports = router;