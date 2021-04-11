/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express';
import IResponse from '@common/defaults/Response';

import { CelebrateError, isCelebrateError } from 'celebrate';

export function validate() {
  return (
    err: IResponse,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (isCelebrateError(err)) {
      const celebrateError = new CelebrateError('request validation failed', {
        celebrated: true,
      });
      celebrateError.details = err.details;
      return next(celebrateError);
    }
    return next(err);
  };
}

export function error() {
  return (
    err: IResponse,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    } catch {
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };
}
