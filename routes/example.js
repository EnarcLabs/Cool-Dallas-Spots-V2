var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("I am but a lowely Example Route, Nice to meet you")
});

module.exports = router;
