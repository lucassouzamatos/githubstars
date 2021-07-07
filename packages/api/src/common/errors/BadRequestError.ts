import DefaultError from '@common/defaults/Error';

export default class BadRequestError extends Error implements DefaultError {
  readonly statusCode = 400;

  constructor(message: string) {
    super(message);
  }
}
