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

let getStudentsBySchool = (req, res) => {
  let { idschool } = req.params

  User.find({ school: idschool }).populate('evaluation')
    .then(students => res.json(students))
    .catch(err => res.send(err.message))
}

let getUsers = (req, res) => {
  let { search } = req.params,
    searchRegex = RegExp(search, 'i')

  User.find({ name: { $regex: searchRegex } })
    .then(users => res.json(users))
    .catch(err => res.send(err.message))
}


module.exports = {
  getDataUser,
  getUsers,
  getStudentsBySchool,

}