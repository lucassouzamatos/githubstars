import Error from '@common/defaults/Error';

export default class NotFoundError extends Error {
  readonly statusCode = 404;

  constructor(message: string) {
    super(message);
  }
}
