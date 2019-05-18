const School = require('../../models/school.model')

let getSchools = (req, res) => {
  School.find()
    .then(schools => res.json(schools))
    .catch(err => res.send(err.message))
}



module.exports = {
  getSchools,

}