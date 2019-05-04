const User = require('../../models/user.model')

let getUser = (req, res) => {
  let { id } = req.params 
  User.findOne({ _id: id})
    .then(
      user => {
        return res.json(user)
      },
      err => console.error(err)
    )
}

module.exports = {
  getUser,
  
}