// server side mongoose model for users

import mongoose from 'mongoose';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please provide a username',
    unique: 'Username already exists',
  },
  password: {
    type: String,
    required: 'Please provide a password',
  },
  salt: String,
});

userSchema.pre('save', function saveMiddleware(next) {
  this.salt = crypto.randomBytes(16).toString('base64');
  this.password = this.hashPassword(this.password);
  next();
});

userSchema.methods.hashPassword = function hashPassword(password) {
  if (this.salt && password) {
    return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
  }
  return password;
};

userSchema.methods.authenticate = function authenticate(password) {
  return this.password === this.hashPassword(password);
};

export default mongoose.model('User', userSchema);
