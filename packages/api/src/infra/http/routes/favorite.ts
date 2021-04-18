import { Router } from 'express';
import FavoriteController from '@controllers/FavoriteController';

import authenticated from '@middlewares/auth';

const router = Router();

router.use(authenticated);

router.get('/', FavoriteController.all);

export default router;
