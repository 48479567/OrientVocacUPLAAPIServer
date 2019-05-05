const College = require('../../models/college.model')

let postCollege = (req, res) => { 
  let { body } = req,
  savedCollege = new College(body)

  savedCollege.save()
    .then(college => res.json(college))
    .catch(err => res.send(err.message))
}

module.exports = {
  postCollege,
  
}