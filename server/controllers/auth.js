// authentication controller

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'secret',
};

passport.use(new Strategy(opts, (payload, done) => {
  // mock user data for now
  if (payload.username === 'user') {
    return done(null, { username: payload.username, _id: 0 });
  }
  return done(null, false);
}));

class AuthController {
  authenticate(req, res) {
    const user = { _id: '111', username: req.body.username, password: req.body.password };
    console.log(req.body.username);
    const token = jwt.sign(user, opts.secretOrKey, { expiresIn: 10080 });
    return res.json({ success: true, token: 'JWT ' + token });
  }
}

export default new AuthController();

export const isAuthenticated = passport.authenticate('jwt', { session: false });
