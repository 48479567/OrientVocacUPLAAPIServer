const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  
  EvaluationSchema = new Schema({
  tests: [String],
  results: [{
    code: Number,
    chord: Boolean
  }],
  last: [Number],
  message: String,
  
})

module.exports = mongoose.model('Evaluation', EvaluationSchema, 'evaluation')