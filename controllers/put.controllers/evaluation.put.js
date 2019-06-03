const Evaluation = require('../../models/evaluation.model')

let putEvaluation = (req, res) => {
  let { body } = req
  let evaluationUpdate = {
    tests: body.tests,
    results: body.results,
    last: body.last,
    message: body.message
  }

  Evaluation.findByIdAndUpdate(body._id, evaluationUpdate)
    .then(
      evaluation => {
        console.log(evaluation) 
        res.send('guardado con exito')
      })
    .catch(err => console.error(err))

}

module.exports = {
  putEvaluation
}