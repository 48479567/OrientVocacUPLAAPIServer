const mongoose = require('mongoose'),
  uniqueValidator = require('mongoose-unique-validator'),
  crypto = require('crypto'),
  jwt = require('jsonwebtoken'),
  { secret } = require('../config'),

  Schema = mongoose.Schema,

  UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      index: true,
      unique: true,
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
    evaluation: {
      type: Schema.Types.ObjectId,
      ref: 'Evaluation'
    },
    hash: String,
    salt: String,
  }, { timestamps: true })

  UserSchema.plugin(uniqueValidator, { message: 'Este Usuario ya existe.' })

  UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 256, 'sha256').toString('hex') 
  }

  UserSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 256, 'sha256').toString('hex')
    return this.hash === hash
  }

  UserSchema.methods.generateJWT = function() {
    let today = new Date(),
      exp = new Date(today)
    exp.setDate(today.getDate() + 60)

    return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),

    }, secret)
  }

  UserSchema.methods.toAuthJSON = function() {
    return {
      username: this.username,
      token: this.generateJWT(),
      name: this.name,
      type: this.type,
      college: this.college,
      evaluation: this.evaluation
    }
  }

  module.exports = mongoose.model('User', UserSchema, 'user')




