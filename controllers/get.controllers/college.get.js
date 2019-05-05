const College = require('../../models/college.model')

let getColleges = (req, res) => { 
  College.find()
    .then(colleges => res.json(colleges))
    .catch(err => res.send(err.message))
}

module.exports = {
  getColleges
}