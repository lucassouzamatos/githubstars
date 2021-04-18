import { NextFunction, Request, Response } from 'express';
import Error from '@common/defaults/Error';

function error() {
  return (request: Request, response: Response, next: NextFunction): void => {
    response.error = (e: Error) =>
      response.status(e.statusCode).json({ message: e.message });

    return next();
  };
}

export default {
  error,
};
