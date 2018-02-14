var express = require('express');
var router = express.Router();
var {Place : {model}} = require('../models')

router.get('/', function(req, res, next) {
  res.json({message : "Welcome to the CoolDallasSpots API!!"})
});


module.exports = router;
