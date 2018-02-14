var express = require('express');
var router = express.Router();
let {ExampleController} = require('../controllers')
/* GET users listing. */
router.get('/', (req,res) => {
  ExampleController.getItem(req,res)
})

module.exports = router;
