const express = require('express'),
  router = express.Router(),

  { getUser, getUsers } = require('../controllers/get.controllers/user.get'),

  { postUser } = require('../controllers/post.controllers/user.post')

//get
router
  .get('/register', (req, res) => { 
    res.render('register', getUsers)
  })
  .get('/login/user/:id', getUser)

//post
router
  .post('/register', postUser)



module.exports = router