const mongoose = require('mongoose')

const Snack = mongoose.model('Snack', {
  brand: String,
  flavor: String,
  tags: [String], 
  description: String,
  price: Number,
  picture: String
})

module.exports = Snack
