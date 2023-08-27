/* eslint-disable @typescript-eslint/indent */
import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject } from 'zod';

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({ message: 'Unauthorized' });
};

// eslint-disable-next-line operator-linebreak
export const validateSchema =
  (schema: AnyZodObject) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res.status(400).json(err);
    }
  };
