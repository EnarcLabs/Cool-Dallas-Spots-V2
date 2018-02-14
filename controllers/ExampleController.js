let {Example: model} = require('../models')

let ExampleController = {};


ExampleController.getItem = function(){
  console.log("GetItem has been called")
  console.log(model)
  return true
}

module.exports = ExampleController;