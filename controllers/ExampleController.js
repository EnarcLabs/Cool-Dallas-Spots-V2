let {Example} = require('../models') // The Example variable is an object containing {model, schema}

let ExampleController = {};


ExampleController.getItem = function(){
  console.log("GetItem has been called")
  console.log(Example.module)
  return true
}

module.exports = ExampleController;