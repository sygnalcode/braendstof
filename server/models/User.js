const mongoose = require('mongoose')

const User = mongoose.model('User', {
  firstname: String,
  lastname: String,
  balance: Number,
  picture: String
})

module.exports = User
