import { Router } from 'express';

import {
  register,
  logout,
  currentUser,
  fetchUser,
  updateUser,
} from '../../controllers/user.controller';
import { localLogin } from '../../lib/passport';
import { isLoggedIn, validateSchema } from '../../middlewares';
import { registerSchema, updateUserSchema } from '../../schemas/zodSchemas';

const userRouter = Router();

//  POST Methods
userRouter.post('/register', validateSchema(registerSchema), register);
userRouter.post('/login', localLogin);
userRouter.post('/logout', logout);
// GET Methods
userRouter.get('/current-user', isLoggedIn, currentUser);
userRouter.get('/users/:id', isLoggedIn, fetchUser);
// PATCH Methods
userRouter.patch(
  '/profile',
  isLoggedIn,
  validateSchema(updateUserSchema),
  updateUser,
);

export default userRouter;
