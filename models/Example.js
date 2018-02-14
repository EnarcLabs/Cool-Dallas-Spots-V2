const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
  name: String,
  number: Number,
  obj: Object,
  arr: Array
})

let ExampleModel = mongoose.model("Examples", ExampleSchema);

module.exports = {model: ExampleModel, schema: ExampleSchema}