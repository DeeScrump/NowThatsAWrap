const express = require('express');
//import express from 'express';
const  cateringControls  = require('../controllers/cateringController');

const router = express.Router();

router.route('/catering').get(cateringControls.getCatering);

//export default router;
module.exports = router;