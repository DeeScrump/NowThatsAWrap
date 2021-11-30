const express = require('express');
//import express from 'express';
const  vipControls  = require('../../controllers/vipController');
//import { vip } from '../controllers/vipController';
const router = express.Router();

router.route('/').get(vipControls.getVip);

//export default router;
module.exports = router;