// authentication controller

import passport from 'passport';
import { BasicStrategy } from 'passport-http';

passport.use(new BasicStrategy((username, passport, callback) => {
  // mock user data for now
  if ((username == 'user') && (passport == 'user')) {
    return callback(null, { name: 'user', _id: 0 });
  } else {
    return callback(null, false);
  }
}));

let isAuthenticated = passport.authenticate('basic', { session: false });

export default isAuthenticated;

