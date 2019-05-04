const User = require('../../models/user.model')

let postUser = (req, res) => {
  let { body } = req,
    savedUser = new User(body)
  
  savedUser.setPassword(body.password)

  savedUser.save()
    .then(user => res.json(user))
    .catch(err => {
      return res.json(err.message)
    })
}

module.exports = {
  postUser,
}