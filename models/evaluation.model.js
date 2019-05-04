const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  
  EvaluationSchema = new Schema({
  tests: [String],
  results: [Number],
  last: [Number]
})

module.exports = mongoose.model('Evaluation', EvaluationSchema, 'evaluation')