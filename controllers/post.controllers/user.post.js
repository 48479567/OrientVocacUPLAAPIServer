const User = require('../../models/user.model')
const Evaluation = require('../../models/evaluation.model')

let postUser = (req, res) => {
  let { body } = req

  body.type = 'student'

  let savedEvaluation = new Evaluation({
    tests: ['', '', ''],
    results: [
      { code: 0, chord: false }, 
      { code: 0, chord: false }, 
      { code: 0, chord: false }
    ],
    last: [0, 0, 0],
    message: ''
  })
  savedEvaluation.save()
    .then(evaluation => {
      body.evaluation = evaluation._id
      let savedUser = new User(body)
      savedUser.save()
        .then(
          (user) => {
            user.evaluation = evaluation
            console.log(user)
            res.json(user)
          }
        )
        .catch(
          (err) => {
            console.error(err)
            res.send(err.message)
          }
        )
    })
    .catch(
      (err) => {
        console.error(err)
        res.send(err.message)
      }
    )
}

let postLogin = (req, res) => {
  let { body } = req
  
  User.findOne({ username: body.id }).populate('evaluation')
    .then(user => {
      if (user != null) {
        if (user.password != body.password) {
          return res.send(`No eres ${user.name}`)
        }
        
        user.password = ''
        return res.json(user)
      }
      return res.send('El Usuario no Existe');
    })
    .catch(err => res.send('Fallo al Ingresar'))
}

module.exports = {
  postUser,
  postLogin,

}