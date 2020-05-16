import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersCrontroller from '@modules/users/infra/http/controllers/UsersController';
import UserAvatarCrontroller from '@modules/users/infra/http/controllers/UserAvatarController';

const userRouter = Router();
const upload = multer(uploadConfig);
const usersCrontroller = new UsersCrontroller();
const userAvatarController = new UserAvatarCrontroller();

userRouter.post('/', usersCrontroller.create);

userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userRouter;
