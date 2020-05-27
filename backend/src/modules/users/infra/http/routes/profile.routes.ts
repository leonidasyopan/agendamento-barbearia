import { Router } from 'express';

import ProfileCrontroller from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileCrontroller = new ProfileCrontroller();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileCrontroller.show);
profileRouter.put('/', profileCrontroller.update);

export default profileRouter;
