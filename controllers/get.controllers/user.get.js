const User = require('../../models/user.model'),
  Evaluacion = require('../../models/evaluation.model')

let getDataUser = (req, res) => {
  let { username } = req.params
  User.findOne({ username: username }).populate('evaluation')
    .then(
      dataUser => {
        return res.json(dataUser)
      },
      err => res.send(err.message)
    )
}

let getStudentsByCollege = (req, res) => {
  let { idcollege } = req.params

  User.find({ college: idcollege }).populate('evaluation')
    .then(students => res.json(students))
    .catch(err => res.send(err.message))
}

let getUsers = (req, res) => {
  return res.json('buscando alumnos')
}


module.exports = {
  getDataUser,
  getUsers,
  getStudentsByCollege,

}