const express = require('express');
//import express from 'express';
const  contactControls  = require('../../controllers/contactController');
//import { about } from '../controllers/aboutController';
const router = express.Router();

router.route('/').get(contactControls.getContact);

//export default router;
module.exports = router;