const express = require('express'),
  router = express.Router(),

  { getUsers, getDataUser, getStudentsByCollege } = require('../controllers/get.controllers/user.get'),
  { getColleges } = require('../controllers/get.controllers/college.get'),
  { getEvaluation } = require('../controllers/get.controllers/evaluation.get'),

  { postUser, postLogin } = require('../controllers/post.controllers/user.post'),
  { postCollege } = require('../controllers/post.controllers/college.post')

//get
router
  .get('/home/:username', getDataUser)
  .get('/college', getColleges)
  .get('/college/students/:idcollege', getStudentsByCollege)
  .get('/users/:search', getUsers)//falta
  .get('/user/evaluation/:id', getEvaluation)

//post
router
  .post('/login', postLogin)
  .post('/register', postUser)
  .post('/college', postCollege)



module.exports = router