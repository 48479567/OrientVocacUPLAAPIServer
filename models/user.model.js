const mongoose = require('mongoose'),
  uniqueValidator = require('mongoose-unique-validator'),
  crypto = require('crypto'),

  Schema = mongoose.Schema,

  UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      required: [true, "Can't be Blank"]
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Can't be Blank"]
    },
    name: String,
    type: {
      type: String,
      required: true,
    },
    college: {
      type: Schema.Types.ObjectId,
      ref: 'College'
    },
    degree: String,
    gender: String,
    career: String,
    evaluation: {
      type: Schema.Types.ObjectId,
      ref: 'Evaluation'
    },
  })

UserSchema.plugin(uniqueValidator, { message: 'Este Usuario ya existe.' })

UserSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

UserSchema.methods.validPassword = (password) => {
  let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash === hash
}

module.exports = mongoose.model('User', UserSchema, 'user')



