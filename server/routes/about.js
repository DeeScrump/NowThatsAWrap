const express = require('express');
//import express from 'express';
const  aboutControls  = require('../controllers/aboutController');
//import { about } from '../controllers/aboutController';
const router = express.Router();

router.route('/about').get(aboutControls.getAbout);

//export default router;
module.exports = router;