import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UserController from '@controllers/UserController';

const router = Router();

router.post(
  '/sync',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
    },
  }),
  UserController.sync
);

export default router;
