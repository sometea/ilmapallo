// authentication controller

import passport from 'passport';
import { BasicStrategy } from 'passport-http';

passport.use(new BasicStrategy((username, password, callback) => {
  // mock user data for now
  if ((username === 'user') && (password === 'user')) {
    return callback(null, { name: 'user', _id: 0 });
  }
  return callback(null, false);
}));

const isAuthenticated = passport.authenticate('basic', { session: false });

export default isAuthenticated;

