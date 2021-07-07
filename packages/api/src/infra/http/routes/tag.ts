import { Router } from 'express';
import TagController from '@controllers/TagController';

import authenticated from '@middlewares/auth';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

router.use(authenticated);

router.post(
  '/attach',
  celebrate({
    [Segments.BODY]: {
      favorite_id: Joi.string().required(),
      tags: Joi.string().allow(''),
    },
  }),
  TagController.attach
);

export default router;
