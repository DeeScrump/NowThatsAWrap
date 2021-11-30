const express = require('express');
//import express from 'express';
const  eventControls  = require('../../controllers/eventController');

const router = express.Router();

router.route('/').get(eventControls.getEvent);

//export default router;
module.exports = router;