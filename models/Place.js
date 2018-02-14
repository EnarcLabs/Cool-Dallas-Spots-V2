let mongoose = require('mongoose')

let PlaceSchema = new mongoose.Schema({
  title: String,
  description: String,
  coordinates: {
    longitude: String,
    latitude: String
  },
  tags: Array
})

let PlaceModel = mongoose.model('Places', PlaceSchema);

module.exports = {model: PlaceModel, schema: PlaceSchema}
