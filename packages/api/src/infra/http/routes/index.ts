import { Router } from 'express';

import UserRouter from '@infra/http/routes/user';
import TagRouter from '@infra/http/routes/tag';
import FavoriteRouter from '@infra/http/routes/favorite';

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/tags', TagRouter);
routes.use('/favorites', FavoriteRouter);

export default routes;
