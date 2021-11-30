const express = require('express');
 const router = express.Router();

const homeRoutes = require('./home');
const aboutRoutes = require('./about');
const menuRoutes = require('./menu');
const onlineRoutes = require('./online');
const eventRoutes = require('./event');
const contactRoutes = require('./contact');
const cateringRoutes = require('./catering');
const vipRoutes = require('./vip');
//const reviewsRoutes = require('./menu/:id/reviews');

router.use('/home', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/menu', menuRoutes);
router.use('/online', onlineRoutes);
//router.use('/menu/:id/reviews', reviewsRoutes);
router.use('/event', eventRoutes);
router.use('/contact', contactRoutes);
router.use('/catering', cateringRoutes);
router.use('/vip', vipRoutes);

module.exports = router;


// app.use('/', home);
// app.use('/about', about);
// app.use('/menu', menu);
// app.use('/menu/:id/reviews', reviews);
// app.use('/spevent', spevent);
// app.use('/contact', contact);
// app.use('/catering', catering);

// function homeRoutes(app) {
//     app.get('/', (req, res) => {
//         res.render('home')
//     })
// }

// function aboutRoutes(app) {
//     app.get('/about', (req, res) => {
//         res.render('about')
//     })
// }

// function cateringRoutes(app) {
//     app.get('/catering', (req, res) => {
//         res.render('catering')
//     })
// }

// function eventRoutes(app) {
//     app.get('/event', (req, res) => {
//         res.render('event')
//     })
// }

// function contactRoutes(app) {
//     app.get('/contact', (req, res) => {
//         res.render('contact')
//     })
// }

