const express = require('express');
//import express from 'express';
const  homeControls  = require('../../controllers/homeController');

const router = express.Router();

router.route('/').get(homeControls.getHome);

//export default router;
module.exports = router;