const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/user.model')

passport.use(new LocalStrategy({
  usernameField: 'user[username]',
  passwordField: 'user[password]'
}, (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user || !user.validPassword(password)) {
        return done(null, false, { errors: { 'Usuario o Contraseña': 'Es Incorrecto' } })
      }
      return done(null, user)
    })
    .catch(done)
}))