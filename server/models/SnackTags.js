const mongoose = require('mongoose')

const SnackTags = mongoose.model('SnackTags', {
  paleo: String,
  raw: String,
  vegan: String,
  lowsugar: String,
  lowcarb: String,
  soyfree: String,
  grainfree: String,
  glutenfree: String,
  lactosefree: String,
  bio: String,
  organic: String,
  noaddedflavors: String,
  highprotein: String,
  noaddedsugar: String,
  noaddedcoloring: String,
  noaddedpreservatives: String,
  ketogenic: String
})

module.exports = SnackTags
