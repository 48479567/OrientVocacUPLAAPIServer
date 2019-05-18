const School = require('../../models/school.model')

let postSchool = (req, res) => {
  let { body } = req,
    savedSchool = new School(body)

  savedSchool.save()
    .then(school => res.json(school))
    .catch(err => res.send(err.message))
}

module.exports = {
  postSchool,

}