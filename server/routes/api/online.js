const express = require('express');
//import express from 'express';
const  onlineControls  = require('../../controllers/onlineController');
//import { online } from '../controllers/onlineController';
const router = express.Router();

router.route('/').get(onlineControls.getOnline);

//export default router;
module.exports = router;