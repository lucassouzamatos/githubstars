import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import routes from '@infra/http/routes';

import 'express-async-errors';
import '@infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
