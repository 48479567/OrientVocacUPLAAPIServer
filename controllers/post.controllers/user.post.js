const User = require('../../models/user.model')

let postUser = (req, res) => { 
  let { body } = req,
    savedUser = new User(body)

  savedUser.save()
    .then(user => res.json(user))
    .catch(err => console.error(err))
    
}

module.exports = {
  postUser,
}