// authentication controller

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import User from '../models/user';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'secret',
};

passport.use(new Strategy(opts, (payload, done) => {
  // console.log(JSON.stringify(payload._doc));
  User.findById(payload._doc._id, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    return done(null, false);
  });
}));

class AuthController {
  authenticate(req, res) {
    User.findOne({ name: req.body.username }, (err, user) => {
      if (!err && user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign(user, opts.secretOrKey, { expiresIn: 10080 });
          return res.json({ success: true, token: 'JWT ' + token });
        }
        res.status(401);
        return res.json({ success: false, message: 'Wrong password.' });
      }
      res.status(401);
      return res.json({ success: false, message: 'User not found.' });
    });
  }
}

export default new AuthController();

export const isAuthenticated = passport.authenticate('jwt', { session: false });
