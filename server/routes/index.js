const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
// const homeRoutes = require('./home');
// const aboutRoutes = require('./about');
// const contactRoutes = require('./contact');
// const cateringRoutes = require('./catering');
// const eventRoutes = require('./event');
// const menuRoutes = require('./menu');

// router.use('/', homeRoutes);
// router.use('/', aboutRoutes);
// router.use('/', contactRoutes);
// router.use('/', cateringRoutes);
// router.use('/', eventRoutes);
// router.use('/', menuRoutes);

router.use('/api', apiRoutes);

//serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
// router.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });
// router.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/about.html"));
// });
// router.get("/event", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/event.html"));
// });
// router.get("/catering", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/catering.html"));
// });
// router.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/contact.html"));
// });

// router.get("/menu", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/menu.html"));
// });

module.exports = router;