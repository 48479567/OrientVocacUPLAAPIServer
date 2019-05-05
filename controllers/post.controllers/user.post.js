const User = require('../../models/user.model')

let postUser = (req, res) => { 
  let { body } = req,
    newUser = {
    username: body.username,
    password: body.password,
    name: body.name,
    type: 'student',
    college: body.college,
    degree: body.degree,
    gender: body.gender,
    evaluation: '5cce37c5c4ec04601b7d13db'
  }

    savedUser = new User(newUser)

  savedUser.save()
    .then(user => res.json(user))
    .catch(
      (err) => {
        console.error(err.message)
        res.send(err.message)
      }
    )
}

let postLogin = (req, res) => { 
  let { body } = req
  User.findOne({ username: body.username })
    .then(user => {
      if (user.password != body.password) {
        return res.json(`No eres ${user.name}`)
      }
      return res.json(user)
    })
    .catch(err => res.json(err))
}

module.exports = {
  postUser,
  postLogin,

}