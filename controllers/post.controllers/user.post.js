const User = require('../../models/user.model')

let postUser = (req, res) => {
  let { body } = req

  body.evaluation = '5cce37c5c4ec04601b7d13db',
    body.type = 'student'

  let savedUser = new User(body)

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
  
  User.findOne({ username: body.id })
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