const express = require('express'),
  router = express.Router(),

  { getUser } = require('../controllers/get.controllers/user.get'),

  { postUser } = require('../controllers/post.controllers/user.post')

//get
router
  .get('/register', (req, res) => { 
    res.render('register')
  })
  .get('/login/user/:id', getUser)

//post
router
  .post('/register', postUser)



module.exports = router