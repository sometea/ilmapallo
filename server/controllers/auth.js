// authentication controller

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'secret',
};

passport.use(new Strategy(opts, (payload, done) => {
  // mock user data for now
  if (payload.sub === '1111') {
    return done(null, { name: 'user', _id: 0 });
  }
  return done(null, false);
}));

const isAuthenticated = passport.authenticate('jwt', { session: false });

export default isAuthenticated;

