import { Router } from 'express';

import UserRouter from '@infra/http/routes/user';
import TagRouter from '@infra/http/routes/tag';
import FavoriteRouter from '@infra/http/routes/favorite';

const routes = Router();

routes.use('/api/user', UserRouter);
routes.use('/api/tags', TagRouter);
routes.use('/api/favorites', FavoriteRouter);

export default routes;
