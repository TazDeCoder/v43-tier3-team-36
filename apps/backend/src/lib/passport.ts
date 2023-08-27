/* eslint-disable consistent-return */
import type { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const localLogin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'local',
    (err: Error, user: Express.User, info: { message: string }) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({ message: info.message });
      }

      req.login(user, (err) => {
        if (err) {
          return next(err);
        }

        return res.status(200).json({ message: info.message });
      });
    },
  )(req, res, next);
};
