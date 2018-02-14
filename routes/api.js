var express = require('express');
var router = express.Router();
var {Place} = require('../models')
var {PlaceController, APIController} = require('../controllers')

router.get('/', function(req, res, next) {
  res.json({message : "Welcome to the CoolDallasSpots API!!"})
});

// Last worked on !!!!!!!!
router.post('/create/place', APIController.place_create_post)

module.exports = router;
