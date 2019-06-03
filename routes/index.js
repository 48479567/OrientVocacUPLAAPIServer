const express = require('express'),
  router = express.Router(),

  { getUsers, getDataUser, getStudentsBySchool } = require('../controllers/get.controllers/user.get'),
  { getSchools } = require('../controllers/get.controllers/school.get'),
  { getEvaluation } = require('../controllers/get.controllers/evaluation.get'),

  { postUser, postLogin } = require('../controllers/post.controllers/user.post'),
  { postSchool } = require('../controllers/post.controllers/school.post'),

  { putEvaluation } = require('../controllers/put.controllers/evaluation.put')

//get
router
  .get('/home/:username', getDataUser)
  .get('/school', getSchools)
  .get('/school/students/:idschool', getStudentsBySchool)
  .get('/users/:search', getUsers)//falta
  .get('/user/evaluation/:id', getEvaluation)

//post
router
  .post('/login', postLogin)
  .post('/register', postUser)
  .post('/school', postSchool)

router
  .put('/student/evaluation', putEvaluation)


module.exports = router