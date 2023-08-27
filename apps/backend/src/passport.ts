import passport from 'passport';
import { compare } from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';

import { findUserById, findUserByUsername } from './services/user.service';

export type User = {
  id: string;
};

export const passportSessions = () => {
  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser(async (user: User, done) => {
    const foundUser = await findUserById(user.id);

    if (!foundUser) {
      return done(null, false);
    }

    return done(null, { id: foundUser.id });
  });
};

export const passportLocal = () => {
  // eslint-disable-next-line implicit-arrow-linebreak
  passport.use(
    'local',
    new LocalStrategy(async (username, password, done) => {
      try {
        const foundUser = await findUserByUsername(username);

        if (!foundUser) {
          return done(null, false, {
            message: 'Could not find user with username',
          });
        }

        const passwordMatches = await compare(password, foundUser.password);

        if (!passwordMatches) {
          return done(null, false, { message: 'Invalid credentials' });
        }

        return done(null, foundUser, { message: 'Login successful' });
      } catch (err) {
        return done(err);
      }
    }),
  );
};
