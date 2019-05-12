const mongoose = require('mongoose'),
  Schema = mongoose.Schema,

  CollegeSchema = new Schema({
    name: String,
    code: {
      type: String,
      required: [true, "Can't be Blank"],
      unique: true
    },
    location: String,
    acronym: String,
    total: Number,

  })

module.exports = mongoose.model('College', CollegeSchema, 'college')