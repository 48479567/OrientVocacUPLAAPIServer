const Evaluation = require('../../models/evaluation.model')

let getEvaluation = (req, res) => {
  let { id } = req.params

  Evaluation.findOne({ _id: id })
    .then(evaluation => res.json(evaluation))
    .catch(err => res.send(err.message))
}

module.exports = {
  getEvaluation,

}