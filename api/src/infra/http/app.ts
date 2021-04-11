import 'reflect-metadata';

import express from 'express';

import cors from 'cors';
import { errors as celebrate } from 'celebrate';

import { error, validate } from '@middlewares/error';
import controller from '@middlewares/controller';
import routes from '@infra/http/routes';

import 'express-async-errors';
import '@infra/container';
import '@infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(controller.error());
app.use(routes);
app.use(validate());
app.use(celebrate());
app.use(error());

export default app;
