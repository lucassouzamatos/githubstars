import DefaultError from '@common/defaults/Error';

export default class NotFoundError implements DefaultError {
  readonly statusCode = 404;

  constructor(message: string) {
    super(message);
  }
}
