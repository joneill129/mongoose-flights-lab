const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')
const flight = require('../models/flight')


router.get('/', flightsCtrl.index)
router.post('/create', flightsCtrl.create)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)


module.exports = router;
