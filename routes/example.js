var express = require('express');
var router = express.Router();
let {ExampleController} = require('../controllers')
/* GET users listing. */
router.get('/', () => {
  ExampleController.getItem()
})

module.exports = router;
